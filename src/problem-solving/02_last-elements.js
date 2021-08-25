/**
 * Get the last n data elements from the nested object
 *
 * See the test if you have questions
 */
module.exports = {
   getLastNumbers : (linkedList, lastItemsCount) => { 
    let list = linkedList;
    const arr = [];
  
    while (list.next) {
      arr.push(list.data);
      list = list.next; 
    }
    arr.push(list.data);
  
    if (lastItemsCount >= arr.length) return arr;
  
    return arr.slice(arr.length - lastItemsCount, arr.length);
   }
  }
