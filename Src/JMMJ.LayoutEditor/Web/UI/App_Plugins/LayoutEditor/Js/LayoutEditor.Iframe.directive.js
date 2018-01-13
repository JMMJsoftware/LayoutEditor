angular.module("umbraco").directive('iframeDirective', ['$window', function ($window) {
    return {
        restrict: 'EA',
        scope: {
            iframeData: '=',
            iframeDummy: '@'
        },
        template: '<iframe ng-src="/Start.html"></iframe>',
        link: function (scope, element, attrs) {

            scope.insertData = function (data) {
                var iframe = $(element).find('iframe');
                var inside = iframe[0].contentDocument || iframe[0].contentWindow.document;

                $(inside.body).html(data);
                $(inside.head).prepend($('<style type=\'text/css\'> body { overflow: hidden; } body, body *, body *:before, body *:after { box-sizing: border-box; } body *:after {  content: ""; display: table; clear: both; }   </style>'));
            }

            scope.insertData(scope.iframeData);

            scope.$watch('iframeData', function (newdata) {
                scope.insertData(newdata);
            });

            scope.resizeIframe = function () {
                $window.setInterval(function () {
                    var iframe = $(element).find('iframe');
                    var inside = iframe[0].contentDocument || iframe[0].contentWindow.document;

                    var final_height = 0;




                    $(inside.body).children().each(function (i, child) {
                        final_height += $(child).outerHeight(true);
                    });

                    $(iframe).css('height', final_height);
                }, 100);
            };

            $($(element).find('iframe')).on('load', function () {
                scope.insertData(scope.iframeData);
                scope.resizeIframe();
            });
        }
    };
}]);