import instance from "./config";

export const getAll = () => {
    const url = `/contacts`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/contacts/${id}`;
    return instance.get(url);
}
export const add = (contact) => {
    const url = `/contacts`;
    return instance.post(url, contact)
}
export const remove = (id) => {
    const url = `/contacts/${id}`;
    return instance.delete(url)
}
export const update = (contact) => {
    const url = `/contacts/${contact.id}`;
    return instance.put(url, contact)
}