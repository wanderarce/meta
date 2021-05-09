const url = "http://localhost:8080/";
var app = angular.module('app', [

]);
allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
};

//app.use(allowCrossDomain);
app.controller('veiculosController', function($scope, $http) {
    $scope.funcionarios = [];
    var path = "veiculos";

});
app.controller('funcionariosController', function($scope, $http) {
    var path = "funcionarios";
    var endpoint = url + path;
    get(endpoint, $http).then(
        function(response) {
            $scope.funcionarios = response.data;
        },
        function(error) {
            console.log(error);
        }
    );
    $scope.deletarFuncionario = function(id) {
        $http.delete(endpoint + "/" + id, [
            { data: '', headers: allowCrossDomain }
        ]).then(
            function(response) {
                console.log(response);
            },
            function(error) {
                console.log(error);
            }

        );
    }
    $scope.editarFuncionario = function(id) {

    }
    $scope.adicionarFuncionario = function() {
        var data = $scope.funcionario;
        $http.post(
                endpoint, data
            )
            .then(function(response) {
                    console.log(response);
                },
                function(response) { // optional
                    alert("Erro!");
                    console.log(response);
                });
    };

});

function get(url, http) {
    return http.get(url).then(
        function(response) {
            //console.log(response);
            return response;
        },
        function(error) {
            return error;
        }
    );
}