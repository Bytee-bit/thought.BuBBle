let nextId = 0;
export const generatedId = ()=>{
    nextId += 1;
    return nextId;
}
export const getExpirationTime = ()=>{
    return Date.now() + 15*1000;
}