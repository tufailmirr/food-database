
// import { URL } from "url"
type queryParams = Record<string | number, string>

export const createURL = (base : string, ...params : queryParams[] ) => {
    const url  = new URL(base)
    if(params.length)
    params.forEach((param : queryParams) => url.searchParams.set(Object.keys(param)[0],Object.values(param)[0]))
    return url.toString()
}



export const getParamFromUrl = (url : string, param : string) => {
    try {
        const parsedUrl = new URL(url);
        const params = new URLSearchParams(parsedUrl.search);
        return params.get(param);
    } catch (error) {
        console.error("Invalid URL:", error);
        return null;
    }
};

export const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout | undefined;

    return function(this: any, ...args: any[]) {
        const context = this;
        clearTimeout(timeout as NodeJS.Timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
};
