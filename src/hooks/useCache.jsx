import { useState } from "react";


export default function useCache(key, valueAsDefault)
{
    const [cachedValue, setCachedValueRaw] = useState(() => {
        const cached = localStorage.getItem(key);
        console.log(cached)
        if (cached) {
            return cached;
        }
        else {
            return valueAsDefault;
        }
    })

    const setCachedValue = (value) => {
        console.log(valueAsDefault);
        console.log(value);
        setCachedValueRaw(value)
        localStorage.setItem(key, value)
    }
    
    return [cachedValue, setCachedValue];
}