    // Ramiro Gustavo Cabrera Mendiola 
    // Ejercicios Semana Uno 
    // EJercicio : #6 Partition Equal Subset Sum
    
class Solution {
    int totalSum;
    int dp[][];
    // N = 200
    // arr[i] = 100, sum = (200 * 100)
    int recur(int index,int sum1,int nums[],int n)
    {
        if(index == n)
        {
            if(sum1 == (totalSum-sum1))
            {
                return 1;
            }
            else
            {
                return 0;
            }
        }
        
        if(dp[index][sum1]!=-1)
        {
            return dp[index][sum1];
        }
        
        int firstOption = recur(index+1,(sum1+nums[index]),nums,n);
        int secondOption = recur(index+1,sum1,nums,n);
        
        int currentAnswer = firstOption|secondOption;
        dp[index][sum1] = currentAnswer;
        return currentAnswer;
    }
    public boolean canPartition(int[] nums) {
        int n = nums.length;
        dp = new int[n][(n*100+1)];
        
        for(int i=0;i<n;i++)
        {
            Arrays.fill(dp[i], -1);
        }
        
        totalSum = 0;
        
        
        for(int i=0;i<n;i++)
        {
            totalSum += nums[i];
        }
        
        if(recur(0,0,nums,n) == 1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
