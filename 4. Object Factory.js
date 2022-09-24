function solve(library , orders){
    let result = [];
    for (let order of orders) {
        let currentOrder = Object.assign({}, order.template);
        for (let  part of parts) {
            let functionToCopy = library[part]
            currentOrder[part] = functionToCopy 
        }
        result.push(currentOrder)
    }
    return result;
}