export const centToDollar = function(val) {
    return `$${(val / 100).toFixed(2)}`
}


export const readableDate = function(val) {
    const today = new Date();
    const productDate = new Date(val);
    // first check if both are in the same month
    if (today.getMonth() === productDate.getMonth()) {
        const dateDiff = today.getDate() - productDate.getDate(); 
        // is less than a week 
        if (dateDiff < 7) {
            return `${dateDiff} days ago`
        }
    }
    return productDate.toDateString();
}