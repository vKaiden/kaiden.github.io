const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/hd-fan-art-poster-of-hollow-knight-gfqwy06xyo81wi4z.jpg") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/hd-fan-art-poster-of-hollow-knight-gfqwy06xyo81wi4z.jpg");
  }
};