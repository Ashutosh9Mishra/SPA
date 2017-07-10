app.controller("apiCntrl",function($scope,myFactory){
	
	$scope.callMe=function(){
	var myword = $scope.searchCity;	
	var promise = myfactory.callServer(city);
		
		for(var i = 1; i<=10; i++){
		console.log("Time Pass ",i);
		}
		promise.then(function(data){
			console.log("Promise Filled...");
			$scope.result = data;
			
		},function(err){
			$scope.error = err;
		});
	//$scope.data = result;
	}
});