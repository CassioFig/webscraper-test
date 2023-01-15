import { HttpResponse } from "@types_/web";

export interface IController<Request, Response> {
    handle(...request: Request[]): Promise<HttpResponse<Response>>;
}