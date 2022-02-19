// Run remove hash once page loads
removeHash();

// Remove hash whenever hash is changed
window.addEventListener('hashchange', removeHash, false);

// When the user scrolls the page
window.onscroll = function() {onScroll()};
let heightSwitch = 550;
let buttonOffset = 15;
let buttonWidthTrigger = 600;

// Progress bar and contact button hide/unhide
function onScroll() {
  // progress bar
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var clientWidth = document.documentElement.clientWidth;
  if (clientWidth <= buttonWidthTrigger) {
    document.getElementById("myBar2").style.width = scrolled + "%";
  }
  else {
    if (document.documentElement.clientHeight < heightSwitch) {
      document.getElementById("myBar2").style.width = scrolled + "%";
    }
    else {
      document.getElementById("myBar1").style.width = scrolled + "%";

      //topnavbar section
      topnavbarsections = document.getElementsByClassName("topnavidx");
      if (scrolled > 85){
        current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active ", "");
        topnavbarsections[3].className = "active topnavidx";
      } 
      else if (scrolled > 66){
        current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active ", "");
        topnavbarsections[2].className = "active topnavidx";
      } 
      else if (scrolled > 23){
        current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active ", "");
        topnavbarsections[1].className = "active topnavidx";
      }
      else {
        current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active ", "");
        topnavbarsections[0].className = "active topnavidx";
      }
    }
  }
  // show contacts button on scroll
  contactButton = document.getElementById("contactButton");
  if (scrolled > buttonOffset) {
    if (clientWidth <= buttonWidthTrigger) {
      contactButton.className = "contactbtnwrapper unhide";
    }
  }
  else {
    contactButton.className = "hide";
  }
}

// Remove hash and whatever comes after from the url
function removeHash() {
  history.pushState(null, null, window.location.href.split("#")[0]);
}

console.log("Well, you seem to be very curious. So, you'll also get to know some of my personal interests and favorite activities: Fixing things, technology, motorcycle off-road riding, golf, reading, music and travelling.");