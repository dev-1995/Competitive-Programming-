module.exports = { 
 //param A : array of array of integers
 //return a array of integers
	spiralOrder : function(A){
	   var T = 0;
		var B = A.length-1;
		var L = 0;
		var R = A[B].length-1;
		var dir = 0;
		var Arr=[];
		while(L<=R && T<=B)
		{
			if(dir==0)
			{
				// console.log(L);
				for(var i=L;i<=R;i++)
				{
					Arr.push(A[T][i]);
				}

				T++;
				dir=1;
			}
			else if(dir==1)
			{
				
				for(var i=T;i<=B;i++)
				{
					Arr.push(A[i][R]);
				}
				R--;
				dir=2;
			}
			else if(dir==2)
			{

				for(var i=R;i>=L;i--)
				{
					Arr.push(A[B][i]);
				}
				B--;
				dir=3;
			}
			else 
			{
				for(var i=B;i>=T;i--)
				{
					Arr.push(A[i][L]);
				}
				L++;
				dir=0;

			}
		}
		
		return Arr;
	
    }
}
