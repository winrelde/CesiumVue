import axios from 'axios'

/**
 * 外部调用通过AxiosUtils.GetTest(params1, params2)的方式
 * @param {*} params1 
 * @param {*} params2 
 * @returns 
 */
export function GetTest(params1, params2) {
    return axios({
        url: 'http://xxx',
        method: 'GET',
        params: {
            params1: params1,
            params2: params2,
        },
        dataType: 'json',
        async: false,
    })
}

export function PostTest(params1,params2) {
    return axios({
        url: 'http://xxx',
        method: 'POST',
        params: {
            params1: params1,
            params2: params2
        },
        dataType: 'json',
        async: false,
    })
}
