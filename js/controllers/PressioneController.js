app.controller('PressioneController', ['$scope', '$http', function ($scope, $http) {
        var vm = this;

        vm.init = function () {
            vm.clearRecord();
            $http.get("http://localhost/pa/dbconnect.php")
                    .then(function (response) {
                        $scope.dati = Object.values(response.data);
                    });
        };

        vm.clearRecord = function () {
            $scope.newRecord = {
                sistolica: "",
                diastolica: "",
                kg: "",
                datamisurazione: ""
            };
        }
        vm.deleteRow = function (id) {
            $http.get("http://localhost/pa/dbconnect.php?act=del&id=" + id)
                    .then(function (response) {
                        $scope.dati = response.data;
                    });
        };
        vm.addRecord = function () {

            $http.post("http://localhost/pa/dbconnect.php?act=new", $scope.newRecord)
//            $http({
//                url: "http://localhost/pressionefrontend/dbconnect.php?act=new",
//                method: "POST",
//                header: {"Content-Type": "application/json"},
//                data: $scope.newRecord })
            .then(function (response) {
                $scope.dati = response.data;
            });

            vm.clearRecord();
        };

        vm.init();

    }]);


