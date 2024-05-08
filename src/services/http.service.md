import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/*
todo:  Instraction
1. install &  import . install [npm i --save-dev @types/node] also for reading process.env file . 
2. make a axisoConfig and give her type for using on type script. 
3. make a instance and give axios config on instance. 
4. make a class for getting efficient way to access axios from another component. 
5. declare a request const httpReq = new Request() and export it defualt. 
6. make some class request in this bellow. 
7. in typescript সব ডিটেইলে লিখে দিতে হবে যেমন get(url: srting): এটা একটা প্রমিজ যা Promise<AxiosResponse> রিটার্ন করে। তাও লিখে দিতে হবে । 

*/

// make a axios config 
const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_PAGE_URL,
    timeout: 15000,
    headers: { 'X-Custom-Header': 'foobar' }
}

const instance: AxiosInstance = axios.create(axiosConfig);

// instance.get('/product').then(res => res.data)


class Request {
    async get(url: string): Promise<AxiosResponse> {
        return instance.get(url);
    }
    async post(url: string, body) {
        return instance.post(url, body);
    }
    async update(url: string, body) {
        return instance.patch(url, body);
    }
    async delete(url: string) {
        return instance.delete(url)
    }
}

const httpReq = new Request();
export default httpReq;
