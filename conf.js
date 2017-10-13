var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
      seleniumAddress: 'http://localhost:4444/wd/hub',
      capabilities: {
          'browserName': 'chrome'
      },
      //specs: ['./pages/homePage/homepage.js'],
      specs: ['./pages/search.js'],
      base_url : 'https://angularjs.org',
     framework: 'jasmine2' ,

      onPrepare: function() {
//the below line is to make protractor work with any JS application
        browser.ignoreSynchronization = true;
//the below code is for generating xml report and screenshots on failures
          var jasmineReporters = require('/Users/deepshikha.singh/Documents/CodeBase/Protractor/protractor-basics/node_modules/jasmine-reporters/');
          jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true))
//the below code is for generating html report and screenshots on failures
          jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: false,
            savePath: 'Reports/screenshots'
      }
));
          }
// //the below code is for generating accumulative html report and screenshots on failures
//           afterLaunch: function() {
//              // For Aggregate Report
//              var reporter = require(‘protractor-multicapabilities-htmlreporter’);
//              reporter.generateHtmlReport(‘./output.json’,‘Automation Results’,‘./report.html’);
//            }
   };
