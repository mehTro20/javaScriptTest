const getLongestString = (a) => {
    
    let longest = a.sort((a, b) => a.length - b.length).pop();
    
    return longest 
}