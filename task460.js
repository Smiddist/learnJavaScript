Array.prototype.sum = function (){
    let res =0;
    this.forEach((item) => res += item)
    return res
}

function indexOfArraySumTarget (array, target){
    let res = []
    let nextArrayI = []
    let nextArrayJ = []
    for (let i = 0; i < array.length +1; i++){
        nextArrayI = array.slice(0, i)
                for (let j = 0; j < array.length; j++){
            nextArrayJ = nextArrayI.slice(j, i)
            if (target === nextArrayJ.sum()){
                res.push(array.indexOf(nextArrayJ[0]))
                res.push(array.lastIndexOf(nextArrayJ[1]))
            }
        }
    }
    console.info(res)
    return res;
}



const nums = [2,7,11,15]//, target = 9
const nums1 = [3,2,4]//, target = 6
const nums2 = [3,3]//, target = 6

indexOfArraySumTarget(nums, 9)
indexOfArraySumTarget(nums1, 6)
indexOfArraySumTarget(nums2, 6)