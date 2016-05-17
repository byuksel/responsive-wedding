var rect = element.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);

  var mysize = document.getElementById("introtext").offsetWidth;
  var t = (screen.width/11);
  document.getElementById("introtext").style.marginLeft = t + "px";

  var scsize = screen.width - 2*t;
  console.log(mysize, scsize, t, (mysize - scsize)/2,(screen.width - mysize)/-2);
  document.getElementById("introtext").style.marginRight = (mysize - scsize)/2 + "px";
  document.getElementById("introtext").style.marginLeft = (screen.width - mysize)/-2+ "px";
  document.getElementById("introtext").style.marginRight = (screen.width - mysize)/-2+ "px";


  var rect =  document.getElementById("introtext").getBoundingClientRect();
  console.log(rect.top, rect.right, rect.bottom, rect.left);
    document.getElementById("introtext").style.marginTop =  "-10px";
  document.getElementById("introtext").style.marginLeft =  -1*(rect.left) + "px";
    document.getElementById("introtext").style.marginRight =  (rect.right- screen.width) + "px";


          function fetch() {
          var rect =  document.getElementById("introtext").getBoundingClientRect();
          console.log(rect.top, rect.right, rect.bottom, rect.left);
          document.getElementById("introtext").style.marginTop =  "-10px";
          document.getElementById("introtext").style.marginLeft =  -1*(rect.left) + "px";
          document.getElementById("introtext").style.marginRight =  (rect.right- screen.width) + "px";
          };
          
          fetch();
          
          window.addEventListener("orientationchange", fetch);
