module.exports = {
    sortingData(name, state, orderType){
        if(orderType){
            const sorted = [...state].sort((a,b)=>
            a[name] > b[name] ? 1 : -1)
            return sorted
        } else{
            const sorted = [...state].sort((a,b)=>
            a[name] < b[name] ? 1 : -1)
            return sorted
        }
    }
}