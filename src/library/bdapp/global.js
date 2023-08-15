/*------Global------*/
//Variables
var sPageURL;


/*-------------Global Calling Functions--------------------*/

//Function to retrieve the current URL parameters and split them into each unique record
var getUrlpath = function getUrlpath() {

  sPageURL = $(location).attr('href')
  return sPageURL

}




function getPageNameWithoutExtension(){
  return window.location.pathname.split('/').pop().split('.')[0];
}

function getGWTPageName(){
  var urlString = $(location).attr('href');
  var page = urlString.substring(
    urlString.indexOf("#") + 1, 
    urlString.indexOf(";")
  );
  return page;
}





