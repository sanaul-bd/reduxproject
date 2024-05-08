import httpReq from "./http.service";

class productService {
    async getAllProducts(): Promise<IProduct[]> {
        // todo: change any to proper type
        const { data } = await httpReq.get("/product");
        return data;
    }
}

export default new productService;