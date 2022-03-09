export function isEmpty(obj) {
    return Object.keys(obj)?.length === 0;
}

export function isNotDefined(obj){
    return !obj || isEmpty(obj);

}