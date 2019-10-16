class minHeap{
  constructor(valArray){
    this.values = this._minHeapify(valArray)
  }

  _minHeapify(array){
    let min = Infinity
    for(let i = 0 ; i < array.length; i++){
      if(array[i] < min) min = array[i]
      if(array[i] > array[(i*2)+1]){
        array = this._swap(array,i,(i*2)+1)
      } else if(array[i] > array[(i*2)+2]){
        array = this._swap(array,i,(i*2)+2)
      }
    }
    if (array[0] !== min) array = this._minHeapify(array)
    return array
  }

  _swap(array,index1,index2){
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
    return array
  }

  extractMin(){
    if(this.values.length == 1) return this.values.pop()
    let toPop = this.values[0]
    this.values = this._swap(this.values,0,this.values.length-1)
    this.values.pop()
    this.values = this._minHeapify(this.values)
    return toPop
  }
}

const heapSort = (array) => {
  let finalLength = array.length
  let minHEP = new minHeap(array)
  let result = []
  while(finalLength > result.length){
    result.push(minHEP.extractMin())
  }
  return result
}

console.log(heapSort([7,8,5,1,4,10,9,2,3,25,6,7,7]))
