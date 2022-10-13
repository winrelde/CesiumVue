import * as Cesium from 'cesium/Cesium'
import * as widget from 'cesium/Widgets/widgets.css'
import Store from '../store/index'

//全局常量
export const globeparam = {
    viewer: undefined,
}

export function initViewer(viewerDom) {
    
    Cesium.Ion.defaultAccessToken =
    '自己的Token';

    //Geoserver发布
    let imageryProvider1=new Cesium.WebMapServiceImageryProvider({
        url:'http://localhost:8081/geoserver/cite/wms',
        layers:'cite:geotools_coverage',
        parameters : {
            service : 'WMS',
            format: 'image/png',
            transparent:true,
        },
    });

    let imageryProvider2=new Cesium.WebMapServiceImageryProvider({
        url:'http://localhost:8081/geoserver/cite/wms',
        layers:'cite:924',
        parameters : {
            service : 'WMS',
            format: 'image/png',
            transparent:true,
        },
    });
    //本地地形切片数据
    let terrainProvider = new Cesium.CesiumTerrainProvider({
        url : 'terrain'
    });
    
    globeparam.viewer = new Cesium.Viewer(viewerDom, {
        animation: true, //是否创建动画小器件，左下角仪表
        baseLayerPicker: false, //是否显示图层选择器
        fullscreenButton: false, //是否显示全屏按钮
        geocoder: false, //是否显示geocoder小器件，右上角查询按钮
        homeButton: false, //是否显示Home按钮
        infoBox: true, //是否显示信息框
        sceneModePicker: false, //是否显示3D/2D选择器
        selectionIndicator: false, //是否显示选取指示器组件
        timeline: true, //是否显示时间轴
        navigationHelpButton: false, //是否显示右上角的帮助按钮
        scene3DOnly: true, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
        imageryProvider: new Cesium.TileMapServiceImageryProvider({
            url: Cesium.buildModuleUrl("NaturalEarthII"),
        }),// 本地影像图片
        // terrainProvider: Cesium.createWorldTerrain({requestVertexNormals: true,requestWaterMask: true}),//世界地形
        terrainProvider: terrainProvider,
    })
    // globeparam.viewer.imageryLayers.addImageryProvider(imageryProvider2);
    // globeparam.viewer.imageryLayers.addImageryProvider(imageryProvider1);
    // globeparam.viewer.scene.debugShowFramesPerSecond = true //显示帧率
    globeparam.viewer.cesiumWidget.creditContainer.style.display = 'none' //去除底部的商标（版权）信息
    //设置视角
    globeparam.viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(
            118.1110,27.3243,3000.0
        ),
        //设置相机朝向：俯仰角、倾角
        orientation: {
            heading: Cesium.Math.toRadians(350),
            pitch: Cesium.Math.toRadians(-50),
            roll: 0.0,
        },
    })
    addMouseMoveEvent(globeparam.viewer); //鼠标移动事件
}

export function addMouseMoveEvent(viewertest) {
    let canvas = viewertest.scene.canvas
    let infoHandler = new Cesium.ScreenSpaceEventHandler(canvas)
    infoHandler.setInputAction(function(click) {
        // 创建鼠标射线（相机视线）
        let windowPosition = viewertest.camera.getPickRay(click.endPosition)
        // 计算射线与globe的交点（笛卡尔坐标）
        let cartesianCoord = viewertest.scene.globe.pick(windowPosition, viewertest.scene)
        // 笛卡尔坐标转为地理坐标
        let cartographic = viewertest.scene.globe.ellipsoid.cartesianToCartographic(cartesianCoord)
        // 修改底部位置信息
        let itemProperty = {
            lon: Cesium.Math.toDegrees(cartographic.longitude).toFixed(4), //经度值
            lat: Cesium.Math.toDegrees(cartographic.latitude).toFixed(4), //纬度值
            hei: cartographic.height.toFixed(4), //高程值
            head: Math.floor((viewertest.camera.heading * 180) / Math.PI), //相机朝向
            pitch: Math.floor((viewertest.camera.pitch * 180) / Math.PI), //相机俯仰角
            camerahei: viewertest.camera.positionCartographic.height.toFixed(2), //相机高度
        }
        // Vuex修改空间参考信息的值
        Store.dispatch('setFooterPropertyAsync', itemProperty)
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
}





