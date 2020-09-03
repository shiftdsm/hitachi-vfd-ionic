angular.module('starter.controllers', ['ionic'])
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

.controller('GuideCtrl', function($scope) {
  $scope.openInExternalBrowser = function()
{
 // Open in external browser
 window.open('http://www.hitachi-ies.co.jp/english/products/inv/nes1/doc/NE-S1QuickReferenceGuide.pdf','_system', 'location=no'); 
};
})

.controller('GuidesCtrl', function($scope) {
  $scope.openInExternalBrowser = function()
{
 // Open in external browser
 window.open('http://www.hitachi-america.us/supportingdocs/forbus/inverters/Support/NT3251X.pdf','_system','location=no'); 
};
})

.controller('CatalogCtrl', function($scope, $location, Catalog) {

  $scope.catalogs = Catalog.all();

  $scope.reset = function() {
    $scope.formObject = {};
  }

  $scope.selectTabWithIndex = function(index) {
    $ionicTabsDelegate.select(index);
  }

  $scope.onRegistration = function(){
    window.open('http://www.hitachi-america.us/ice/registration','_system', 'location=no'); 
  }
  
  $scope.submitSearch = function(form){
    var filteredProducts = Catalog.filter(form)
    Catalog.filteredProducts = filteredProducts
    window.localStorage.updateDisplay = 1;
    $location.path("/tab/filterResults")
  }
  $scope.formObject = {}

})

.controller('FilterResultsCtrl', function($scope, $stateParams, Catalog) {
  var updateDisplay = function() {
    // console.log("updating display");
    $scope.products = Catalog.filteredProducts
    if (Catalog.filteredProducts.length > 0) {
      $scope.series = Catalog.filteredProducts[0].series
    } else {
      $scope.series = ''
    }
  }

  $scope.firstUnitAmps = (value) => {
    if (value.model.includes('P1')){
      return 'ND';
    }

    if (value.model.includes('WJ')){
      return 'CT';
    }
    return '';
  }

  $scope.secondUnitAmps = (value) => {
    if (value.model.includes('P1')){
      return 'LD';
    }

    if (value.model.includes('WJ')){
      return 'VT';
    }
    return '';
  }

  $scope.$watch(
      function() {
        // console.log('watching');
        return window.localStorage.updateDisplay;
      },
      function(newValue, oldValue) {
        // console.log('oldValue: ' + oldValue + ', newValue: ' +newValue);
        if (newValue == 1) {
          window.localStorage.updateDisplay = 0;
          updateDisplay();
        }
      });
  updateDisplay();
})


.controller('FAQCtrl', function($scope) {
  $scope.data = [
    {
      "header": "SJ-P1 FAQ",
      "items": [
        {
          "title": "What parameter should I change for an external speed reference?",
          "text": "Please change the speed reference parameter AA101 to 01 for Analog Input 1, 02 for Analog Input 2, or 03 for Analog Input 3."
        },
        {
          "title": "What is the parameter setting to enable for external directional or RUN command from the terminals?",
          "text": "Please change parameter AA111 to 00 for 2-wire control and 01 for 3-wire control."
        },
        {
          "title": "What terminal is assigned for FORWARD in the P1 inverters.",
          "text": "Input Terminal 9 is set for FORWARD RUN by default. No programming changes are required. Please review the manual for the proper wiring configuration. "
        },
        {
          "title": "How could I limit the P1 inverter output voltage to the motor?",
          "text": "Please adjust parameter Hb180 to the proper value for your application and motor."
        },
        {
          "title": "Which parameter do I use to select the correct numbers of motor poles in Hitachi P1 inverters?",
          "text": "Please utilize parameter Hb103, and adjust to the correct number of motor poles. The factory default is 4, however, you may select from 2, 4, 6 and 8. \n            *******Example: Typical 1750 RPM motors are 4 pole configuration*******"
        },
        {
          "title": "What parameter has to be changed for the proper motor output voltage?",
          "text": "Please utilize parameter Hb106 to adjust the voltage to the proper value."
        },
        {
          "title": "How can I set motor full load amp in Hitachi inverters?",
          "text": "Please set the motor protective features using parameter Hb108 and set to the motor amperage. "
        },
        {
          "title": "How could I select the correct motor control mode in Hitachi P1 inverters?",
          "text": "Please review the inverter manual for control mode descriptions, and change parameter AA121 to the correct setting for the application. "
        },
        {
          "title": "How could I select the maximum frequency in Hitachi P1 inverters?",
          "text": "Please adjust parameter Hb105 to set the maximum frequency."
        },
        {
          "title": "How could I select the base frequency of the motor in Hitachi inverters?",
          "text": "Please set the base frequency using parameter Hb104. This is the motor design frequency, normally found on the motor nameplate. This does not need to match the maximum frequency. It can be lower or higher. The default value is 60Hz."
        },
        {
          "title": "How can I set the lower frequency limit in Hitachi P1 inverters?",
          "text": "Please set parameter bA103 to the desired operational low frequency limit in Hz. "
        },
        {
          "title": "How can I set the upper frequency limit in Hitachi P1 inverters?",
          "text": "Please set parameter bA102 to the desired operational high frequency limit in Hz."
        },
        {
          "title": "What parameter do I use to control deceleration time in Hitachi P1 inverters?",
          "text": "Please adjust parameter AC122 to the correct deceleration time. Please keep in mind, that some deceleration times may not be possible due to inertia or application specific constraints. "
        },
        {
          "title": "What parameter selects the direction of the keypad Run command with regards to the motor rotation?",
          "text": "Please utilize parameter AA-12 to select direction desired. "
        },
        {
          "title": "What parameter do I use to control acceleration time in Hitachi P1 Inverters?",
          "text": "Please utilize AC120 to set the acceleration time. Please keep in mind that the selected time is limited by application specific constraints, such as inertia and torque requirements."
        },
        {
          "title": "What parameter enables the DC braking in Hitachi P1 inverters?",
          "text": "You may use parameter AF101 to enable the DC injection braking feature. "
        },
        {
          "title": "What parameter enables dynamic braking in Hitachi P1 Inverters?",
          "text": "Please utilize parameter bA-61 to enable dynamic braking. "
        },
        {
          "title": "What parameter adjusts duty cycle for dynamic braking control in Hitachi P1 inverters?",
          "text": "Please utilize parameter bA-60 to adjust the dynamic braking ratio. "
        },
        {
          "title": "What parameter enables PID control in Hitachi P1 inverters?",
          "text": "Please refer to the manual for PID control, and adjust parameter AH-01 to enable PID control. You will need to then set parameter AA101 to function 15 (PID calculation). Then change AH-07 to the PID target value input destination. Next, set the target value (setpoint) in parameter AH-10. Now, AH-51 is set for the PID1 feedback Data input(Process Variable). After seetting AH-51 you can observe the feedback data in parameter db-30. Finally, you can tune the PID loop using parameter AH-61(P), AH-62(I), and AH-63(D)."
        }
      ]
    },
    {
      "header": "NES1, WJ200 and SJ700 FAQ",
      "items": [
        {
          "title": "How can I get access to all the parameters available on the inverter?",
          "text": "Please review the inverter manual, and navigate through the menu to change parameter B037 to 00."
        },
        {
          "title": "What parameter should I change for an external speed reference?",
          "text": "Please change the speed reference parameter A001 to 01."
        },
        {
          "title": "What is the parameter setting to enable for external directional or RUN command from the terminals?",
          "text": "Please change parameter A002 to 01."
        },
        {
          "title": "What terminal is assigned for FORWARD in the SJ700 and L700 inverters.",
          "text": "Terminal FW is the FORWARD RUN. No programming changes are required. Please review the manual for the proper wiring configuration."
        },
        {
          "title": "How could I limit the inverter output voltage to the motor?",
          "text": "Please adjust parameter A045 to the proper value for your application and motor."
        },
        {
          "title": "Which parameter do I use to select the correct numbers of motor poles in Hitachi inverters?",
          "text": "Please utilize parameter H00, and adjust to the correct number of motor poles. The factory default is 4, however, you may select from 2, 4, 6 and 8."
        },
        {
          "title": "What parameter has to be changed for the proper motor output voltage?",
          "text": "Please utilize parameter A082 to adjust the voltage to the proper value."
        },
        {
          "title": "How can I set motor full load amp in Hitachi inverters?",
          "text": "Please set the motor protective features using parameter B012 and set to the motor amperage."
        },
        {
          "title": "How could I select the correct Volts per Hertz control mode in Hitachi inverters?",
          "text": "Please change parameter A044 to the correct setting for the application."
        },
        {
          "title": "How could I select the maximum frequency in Hitachi inverters?",
          "text": "Please adjust parameter A004 to set the maximum frequency."
        },
        {
          "title": "How could I select the base frequency of the motor in Hitachi inverters?",
          "text": "Please set the base frequency using parameter A003. This does not need to match the maximum frequency. It can be lower or higher."
        },
        {
          "title": "How can I set the lower frequency limit in Hitachi inverters?",
          "text": "Please set parameter A062 to the desired operational low frequency limit in Hz."
        },
        {
          "title": "How can I set the upper frequency limit in Hitachi inverters?",
          "text": "Please set parameter A061 to the desired operational high frequency limit in Hz."
        },
        {
          "title": "What parameter do I use to control deceleration time in Hitachi Inverters?",
          "text": "Please adjust parameter F003 to the correct deceleration time. Please keep in mind, that some deceleration times may not be possible due to inertia or application specific constraints."
        },
        {
          "title": "What parameter selects the direction of the keypad Run command with regards to the motor rotation?",
          "text": "Please utilize parameter F004 to select direction desired."
        },
        {
          "title": "What parameter selects the direction of the keypad Run command with regards to the motor rotation?",
          "text": "Please utilize parameter F004 to select direction desired."
        },
        {
          "title": "What parameter do I use to control acceleration time in Hitachi Inverters?",
          "text": "Please utilize F002 to set the acceleration time. Please keep in mind that the selected time is limited by application specific constraints, such as inertia and torque requirements."
        },
        {
          "title": "What parameter enables the DC braking in Hitachi inverters?",
          "text": "You may use parameter A051to enable the DC injection braking feature."
        },
        {
          "title": "What parameter enables dynamic braking in Hitachi Inverters?",
          "text": "Please utilize parameter B095 to enable dynamic braking."
        },
        {
          "title": "What parameter enables duty cycle for dynamic braking Control in Hitachi inverters?",
          "text": "Please utilize parameter B090 to adjust the dynamic braking ratio."
        },
        {
          "title": "How do I know which parameters assigned for which intelligent input terminals?",
          "text": "Parameters C001 through C007 or C008 correspond to each control terminal block location sequentially. Intelligent input 1 is configured through C001, intelligent input 2 is configured through C002, and on forth."
        },
        {
          "title": "How do I know which parameters assigned for which intelligent output?",
          "text": "Parameters used to configure the intelligent output terminals begin sequentially from C021. Therefore parameter C021 would correspond to terminal 11, parameter C022 for terminal 12 and on forth."
        },
        {
          "title": "What parameter enables PID control?",
          "text": "Please utilize parameter A071 to enable the PID function."
        },
        {
          "title": "What parameter controls Process Variable (feedback or PV) setting in PID control?",
          "text": "Please utilize parameter A076 to select source of feedback for use in the PID function."
        },
        {
          "title": "Are alarm contacts A1 and AL2 programmable for other Functions?",
          "text": "Yes. Alarm contacts can be programmable for any intelligent output functions."
        },
        {
          "title": "How do I restore factory default in WJ200 series inverters?",
          "text": "Please navigate to parameter B084 and use the \"Set\" button to change to 02. Then navigate and change B180 to 01 and press \"Set\". The display will change to d001, indicating the reset is complete."
        },
        {
          "title": "Why my new inverter trips immediately on error E02 when a Run command is given?",
          "text": "Check for motor wiring. If the motor is dual voltage rated (ie. 230/460V) make sure motor cables are not crossed over."
        },
        {
          "title": "Why my new inverter trips on error code E05 immediately when a Run command is issued?",
          "text": "Please verify that parameters A003 and H004 are properly set."
        },
        {
          "title": "How can I select different speed reference sources?",
          "text": "Please utilize A001 to select the speed reference source that is correct for your application."
        }
      ]
    }
  ];

  $scope.toggleHeader= function(head) {
    if ($scope.isHeadShown(head)) {
      $scope.shownHead = null;
    } else {
      $scope.shownHead = head;
    }
  };

  $scope.isHeadShown = function(head) {
    return $scope.shownHead === head;
  };

  $scope.toggleItem= function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  };

});
