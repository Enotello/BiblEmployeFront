import Api from "../index"

export const getBooks = async () => {
    return await Api.get(`books/all`)
};

export const getBook = async (id: any) => {
    return await Api.get(`book/${id}`)
};

export const addBook = async (data: any) => {
    return await Api.post(`book`, data)
};

export const updateBook = async (id: any, data: any) => {
    return await Api.put(`book/${id}`, data)
};

export const deleteBook = async (id: any) => {
    return await Api.delete(`book/${id}`)
};
