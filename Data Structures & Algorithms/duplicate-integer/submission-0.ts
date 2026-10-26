class Solution {

    hasDuplicate(nums: number[]): boolean {
        const seen = new Set<number>; 

        for(let num of nums) {
            if (seen.has(num) === true)
            return true;

             seen.add(num);
        }
        return false; 
    }
}
