// Code goes here
angular.module('MyApp',[]);

angular.module('MyApp').controller('myAppController', ['$scope', function ($scope) {
    
    $scope.title = "Angular Application Template";

    var getDaySubs = function(paperDate) {
        var day = paperDate.getDay();
        var pageIdAndMaxPage = {};
        switch (day) {
        //Sunday
        case 0:
            pageIdAndMaxPage.title = "ಸಾಪ್ತಾಹಿಕ ಪುರವಣಿ";
            pageIdAndMaxPage.day = "ಭಾನುವಾರ";
            pageIdAndMaxPage.id = "j_0";
            pageIdAndMaxPage.maxPage = 6;
            break;
        //Monday
        case 1:
            pageIdAndMaxPage.title = "ಕ್ರೀಡೆ";
            pageIdAndMaxPage.day = "ಸೋಮವಾರ";
            pageIdAndMaxPage.id = "h_0";
            pageIdAndMaxPage.maxPage = 2;
            break;
        //Tuesday
        case 2:
            pageIdAndMaxPage.title = "ಕರ್ನಾಟಕ ದರ್ಶನ ಮತ್ತು ಕೃಷಿ";
            pageIdAndMaxPage.day = "ಮಂಗಳವಾರ";
            pageIdAndMaxPage.id = "f_0";
            pageIdAndMaxPage.maxPage = 4;
            break;
        //Wednesday
        case 3:
            pageIdAndMaxPage.title = "ವಾಣಿಜ್ಯ ಮತ್ತು ಕನಸಿನ ಮನೆ";
            pageIdAndMaxPage.day = "ಭುದವಾರ";
            pageIdAndMaxPage.id = "d_0";
            pageIdAndMaxPage.maxPage = 4;
            break;
        //Thursday
        case 4:
            pageIdAndMaxPage.title = "ಕಾಮನಬಿಲ್ಲು";
            pageIdAndMaxPage.day = "ಗುರುವಾರ";
            pageIdAndMaxPage.id = "q_0";
            pageIdAndMaxPage.maxPage = 4;
            //id = "f_0";
            break;
        //Friday
        case 5:
            pageIdAndMaxPage.title = "ಸಿನಿಮಾ ಮತ್ತು ಕಿರುತೆರೆ";
            pageIdAndMaxPage.day = "ಶುಕ್ರವಾರ";
            pageIdAndMaxPage.id = "l_0";
            pageIdAndMaxPage.maxPage = 4;
            break;
        //Saturday
        case 6:
            pageIdAndMaxPage.title = "ಭೂಮಿಕಾ";
            pageIdAndMaxPage.day = "ಶನಿವಾರ";
            pageIdAndMaxPage.id = "g_0";
            pageIdAndMaxPage.maxPage = 4;
            break;
        default:
        }
        console.log(pageIdAndMaxPage);
        return pageIdAndMaxPage;
    };

    var getPaperLinks = function (lastPage, id) {
        var paperlinks = [];
        for (var i = 1; i <= lastPage; i++) {
            var paperLink = {};
            paperLink.pageNumber = i;
            paperLink.pageLink = "http://prajavaniepaper.com/pdf/" + vm.currentYear + "/" + vm.currentMonth + "/" + vm.currentDay + "/"
                + vm.currentYear + vm.currentMonth + vm.currentDay + id + ("0" + i).slice(-2) + "100.pdf";
            paperlinks.push(paperLink);
        }

        return paperlinks;
    };

    var vm = $scope;
    var today = new Date();
    var tomorrow = new Date(today);

    tomorrow.setDate(today.getDate() + 1);
    vm.changeDayName = getDaySubs(tomorrow).day;
    vm.paperDate = today;

    var loadPapers = function () {
        vm.currentYear = vm.paperDate.getFullYear();
        vm.currentMonth = ("0" + (vm.paperDate.getMonth() + 1)).slice(-2);
        vm.currentDay = ("0" + (vm.paperDate.getDate())).slice(-2);

        vm.currentDate = vm.paperDate.toDateString();
        vm.mainPaperLinks = getPaperLinks(12, "a_0");
        vm.subPaperLinks = getPaperLinks(getDaySubs(vm.paperDate).maxPage, getDaySubs(vm.paperDate).id);
        vm.subPaperTitle = getDaySubs(vm.paperDate).title;
        vm.dayName = getDaySubs(vm.paperDate).day;
    };



    vm.toggleScipDay = function () {
        if (vm.paperDate === tomorrow) {
            vm.changeDayName = getDaySubs(tomorrow).day;
            vm.paperDate = today;
        } else {
            vm.changeDayName = getDaySubs(today).day;
            vm.paperDate = tomorrow;
        }
        loadPapers();
    };
    //http://prajavaniepaper.com/pdf/2014/11/04/20141104a_001100.pdf;

    loadPapers();


//getMainPaperLinks(12);

}]);

