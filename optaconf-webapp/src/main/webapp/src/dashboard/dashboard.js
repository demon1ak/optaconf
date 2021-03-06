angular.module('dashboard', [])
    .controller('DashboardCtrl', ['ScheduleImport', 'ScheduleSolve', function(ScheduleImport, ScheduleSolve) {
        var vm = this;
        vm.title = 'Dashboard';
        vm.isSolving = false;

        vm.import = function() {
            console.log("Importing devoxx schedule...");
            ScheduleImport.import(function() {
                console.log('imported devoxx schedule!');
            });
        };

        vm.solve = function() {
            console.log("Solving schedule...");
            vm.isSolving = true;
            ScheduleSolve.solve(function() {
                console.log("solved devoxx schedule!");
            });
        };
    }]);