app.requires.push('ngSanitize');

angular.module("umbraco")
    .controller("JMMJ.LayoutEditor",
    function ($scope, $rootScope, $timeout, dialogService, macroResource, macroService, $routeParams, $http) {
        if (!$scope.model.value) {
            $scope.model.value = [];
        }

        $scope.nodeId = $routeParams.id;
        $scope.iframes = {};
        $scope.iframes.htmlNodes = {};

        if (!$scope.reorder) {
            $scope.reorder = false;
        }

        $scope.sortableOptions = {
            disabled: true
        };

        $scope.setMacro = function (id) {
            var dialogData = {
                richTextEditor: true,
                macroData: id != undefined ? $scope.model.value[id] : ""
            };

            $scope.macroPickerOverlay = {};
            $scope.macroPickerOverlay.view = "macropicker";
            $scope.macroPickerOverlay.dialogData = dialogData;
            $scope.macroPickerOverlay.show = true;

            $scope.macroPickerOverlay.submit = function (model) {

                var macroObject = macroService.collectValueData(model.selectedMacro, model.macroParams, dialogData.renderingEngine);

                var model = {
                    macroAlias: macroObject.macroAlias,
                    macroParamsDictionary: macroObject.macroParamsDictionary
                };

                if (id != undefined) {
                    $scope.model.value[id] = model;
                } else {
                    $scope.model.value.push(model);
                }

                $scope.macroPickerOverlay.show = false;
                $scope.macroPickerOverlay = null;
            };

            $scope.macroPickerOverlay.close = function (oldModel) {
                $scope.macroPickerOverlay.show = false;
                $scope.macroPickerOverlay = null;
            }
        };

        $scope.removeMacro = function (id) {
            if (id != undefined) {
                $scope.model.value.splice(id, 1);
            }
        }

        $scope.setReorder = function (status) {
            $scope.reorder = status;
            $scope.sortableOptions.disabled = !status;
        }

        $scope.loadMacro = function (name, id, alias) {
            var component = $scope.model.value[id];

            $http.post('/umbraco/surface/LayoutEditor/RenderComponent', { Alias: alias, Parameters: component.macroParamsDictionary })
                .then(function (response) {
                    $scope.iframes.htmlNodes[name] = response;
                });
        }
});