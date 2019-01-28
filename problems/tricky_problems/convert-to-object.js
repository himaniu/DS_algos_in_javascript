
//convert an object into string
export const convertObjectToString = (inputObj, inputStr) => {
    let resultStr = inputStr || '';
    Object.keys(inputObj).forEach((key) => {
        let keyValue = inputObj[key];
        if (typeof keyValue === 'function') {
        } else if (typeof keyValue == 'object' || Array.isArray(keyValue)) {
            resultStr = resultStr + convertObjecttoString(key);
        } else {
            resultStr = resultStr + keyValue + ', ';
        }
    });
    return resultStr;
}