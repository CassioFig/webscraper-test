import { SwaggerContent } from "./Content"

export type SwaggerPath = {
    [key in Methods]? : {
        tags          : string[]
        summary       : string
        description   : string
        parameters?   : Parameter[]
        requestBody?  : {
            required? : boolean
            content   : SwaggerContent 
        },
        responses: Responses
    }
}

type Methods = 'get' | 'put' | 'post' | 'delete' | 'patch'

type Parameter = {
    in          : "path" | "query" | "header"
    name        : string
    description : string
    required    : boolean
}

type HttpResponse = 200 | 201 | 204 | 400 | 401 | 403 | 404 | 409 | 500
type Responses    = {
    [key in HttpResponse]? : {
        description? : string,
        content?     : SwaggerContent
        $ref?        : string
    }
}