module.exports = { 
 //param A : array of integers
 //param B : array of integers
 //return an integer
	coverPoints : function(A, B){
	    var steps = 0;
	    if(A.length > 1)
	    {
	        for(var i=0;i<A.length-1;i++)
        	 {
        	     steps = steps+ Math.max(Math.abs(A[i]-A[i+1]) ,Math.abs(B[i]-B[i+1]));
        	 }
	    }
	    return steps;
	 
	}
};
