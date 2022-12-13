class CommonUtils {
    // static isNumber1 (number) {
    //     if (number === 1) return true;
    //     return false;
    // }
    static getBase64(file) {
        return new Promise((resolve, reject) => {
            // promise: dừng lại để đọc
            const reader = new FileReader(); //đọc file, api của html
            reader.readAsDataURL(file); //đọc
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
}

export default CommonUtils;