const LOCAL_STORAGE_KEY = "access_data";
export const STORE_DATA_IN_LOCALSTORAGE = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};
export const GET_DATA_FROM_LOCALSTORAGE = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
};
