import { HttpResponse } from "@types_/web"

export const ok = <T = any> (data?: T): HttpResponse<T> => ({
    status: 200,
    data
})

export const badRequest = (error: Error): HttpResponse<Error> => {
    return {
        status: 400,
        data: {
            name: error.name,
            message: error.message
        }
    }
}

export const notFound = (error: Error): HttpResponse<Error> => ({
    status: 404,
    data: {
        name: error.name,
        message: error.message
    }
})

export const serverError = (erro: Error): HttpResponse<Error> => ({
    status: 500,
    data: {
        name: erro.name,
        message: erro.message
    }
})