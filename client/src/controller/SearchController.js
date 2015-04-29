app.controller('searchController',['$scope', '$http', 'CategoriesList', '$location', function($scope, $http, CategoriesList, $location){
    $scope.init = function()
    {
        $scope.categories = CategoriesList.categories;
    }
    $scope.init();
    $scope.search = function(searchData)
	{
        var split = searchData.searchText.split(" ");
        var search = split[0];
        for(var i=1;i<split.length;i++)
        {
          search = search + '+' + split[i];
        }
      	$http.get('priceComaprisonV1/' + search)
        .success(function (productDtls, status) {
            $scope.dtls = [];
            for(var i=0;i<productDtls.data.length;i++)
            {
                if(productDtls.data[i].available_price)
                {    
                    productDtls.data[i].available_price = parseInt(productDtls.data[i].available_price);
                    $scope.dtls.push(productDtls.data[i]);
                }    
            }
        })
        .error(function(data, status, headers, config) {
            $scope.dtls = [];
        });
	};

    $scope.show_details = function(url)
    {
        window.open(url,'_blank')
    };

    $scope.searchVersion2 = function(searchData)
    {
        $scope.searchbtn = true; 
        var split = searchData.searchText.split(" ");
        var search = split[0];
        for(var i=1;i<split.length;i++)
        {
          search = search + '+' + split[i];
        }
        $http.get('priceComaprisonV2/' + searchData.category + '/' + search )
        .success(function (data, status) {
            $scope.search_dtls = null;
            for(var i=0;i<data.product.length;i++)
            {
                if(searchData.searchText.toUpperCase() == data.product[i].brand.toUpperCase() + ' ' + data.product[i].model.toUpperCase())
                {    
                    $scope.search_dtls = data.product[i];
                    $scope.searchbtn = false;
                }
            }  
        });
    };
}]);