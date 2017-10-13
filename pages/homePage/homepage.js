describe('Check the elements on home page', function() {

 it('should look for the visibility of angular js logo on home page', function() {
 browser.get('https://angularjs.org');
 var logo = element(by.xpath('//nav[@id="navbar-main"]//a/img')).isDisplayed();
 element(by.xpath('//nav[@id="navbar-main"]//a/img')).click();
 expect(browser.getCurrentUrl()).toEqual('https://angularjs.org/');
 var angular_link = element(by.xpath('//nav[@id="navbar-notice"]//p[2]/a'));
 angular_link.isDisplayed();
 angular_link.click();
 expect(browser.getCurrentUrl()).toEqual('https://angular.io/');
 });

  it('should look for the visibility of "LEARN" element in the hero header on home page', function() {
  browser.get('https://angularjs.org');
  var learn = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[1]/a')).isDisplayed();
  expect(learn.getText()).toEqual('LEARN');
  element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[1]/a')).click();
  var tutorial = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[1]//ul/li[1]/a')).isDisplayed();
  expect(tutorial.getText()).toEqual('Tutorial');
  var faq = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[1]//ul/li[2]/a')).isDisplayed();
  expect(faq.getText()).toEqual('FAQ');
  var videos = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[1]//ul/li[3]/a')).isDisplayed();
  expect(videos.getText()).toEqual('Videos');
  var free_course = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[1]//ul/li[4]/a')).isDisplayed();
  expect(free_course.getText()).toEqual('Free Course');
  var case_study = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[1]//ul/li[5]/a')).isDisplayed();
  expect(case_study.getText()).toEqual('Case Studies');
   });

   it('should look for the visibility of "DEVELOP" element in the hero header on home page', function() {
   browser.get('https://angularjs.org');
   var develop = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[2]/a')).isDisplayed();
   expect(develop.getText()).toEqual('DEVELOP');
   element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[2]/a')).click();
   var developer_guide = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[2]//ul/li[1]/a')).isDisplayed();
   expect(developer_guide.getText()).toEqual('Developer Guide');
   var api_ref = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[2]//ul/li[2]/a')).isDisplayed();
   expect(api_ref.getText()).toEqual('API Reference');
   var error_ref = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[2]//ul/li[3]/a')).isDisplayed();
   expect(error_ref.getText()).toEqual('Error Reference');
   var contribute = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[2]//ul/li[4]/a')).isDisplayed();
   expect(contribute.getText()).toEqual('Contribute');
   var app_project = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[2]//ul/li[5]/a')).isDisplayed();
   expect(app_project.getText()).toEqual('Seed App project template');
   var github = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[2]//ul/li[6]/a')).isDisplayed();
   expect(github.getText()).toEqual('GitHub');
   var download = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[2]//ul/li[7]/a')).isDisplayed();
   expect(download.getText()).toEqual('Download');
    });

    it('should look for the visibility of "DISCUSS" element in the hero header on home page', function() {
    browser.get('https://angularjs.org');
    var discuss = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[3]/a')).isDisplayed();
    expect(discuss.getText()).toEqual('DISCUSS');
    element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[3]/a')).click();
    var blog = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[3]//ul/li[1]/a')).isDisplayed();
    expect(blog.getText()).toEqual('Blog');
    var twitter = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[3]//ul/li[2]/a')).isDisplayed();
    expect(twitter.getText()).toEqual('Twitter');
    var google = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[3]//ul/li[3]/a')).isDisplayed();
    expect(google.getText()).toEqual('Google+');
    var feature = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[3]//ul/li[4]/a')).isDisplayed();
    expect(feature.getText()).toEqual('Feature & Bug Tracker');
    var mailing = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[3]//ul/li[5]/a')).isDisplayed();
    expect(mailing.getText()).toEqual('Mailing List');
    var irc = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[3]//ul/li[6]/a')).isDisplayed();
    expect(irc.getText()).toEqual('IRC');
    var gitter = element(by.xpath('//div[@class="navbar-inner"]//ul[@class="nav"]/li[3]//ul/li[7]/a')).isDisplayed();
    expect(gitter.getText()).toEqual('Gitter');
     });

     it('should look for the visibility of elements in the body content on home page', function() {
     browser.get('https://angularjs.org');
     var angular_logo = element(by.xpath('//div[@class="hero"]/h2'));
     angular_logo.isDisplayed();
     expect(angular_logo.getText()).toEqual('AngularJS');

     var ang_link = element(by.xpath('//div[@class="text-center"][1]/a'));
     ang_link.isDisplayed();
//the below code will switch to the new window and come back to the parent window and hence verify url
      ang_link.click().then(function () {
        browser.getAllWindowHandles().then(function (handles) {
            newWindowHandle = handles[1]; // this is your new window
            browser.switchTo().window(newWindowHandle).then(function () {
                // fill in the form here
                expect(browser.getCurrentUrl()).toMatch('https://angular.io/');
            });
//the below code will switch to the parent window and verify other elements
     parentWindowHandle = handles[0];
     browser.switchTo().window(parentWindowHandle).then(function () {
     var download_angular = element(by.xpath('//div[@class="text-center"][1]/a'));
     download_angular.isDisplayed();
     download_angular.click();
//the below code will verify the presence of popup on clicking download angular link
     expect(element(by.xpath('html/body/div[1]')).isDisplayed()).toBeTruthy();
});
      });
});
});
});
