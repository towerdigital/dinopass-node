declare const fetchPassword: (
    type: string
) => Promise<import('axios').AxiosResponse<any>>
export { fetchPassword }
