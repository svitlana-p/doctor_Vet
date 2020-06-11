document.querySelector('.ico-cont').addEventListener('click', icoPressed);
const imgArray = [
  'img/phone_to_vet.jpg',
  'img/questions.jpg',
  'img/fin_plan.jpg',
];
let curImgInd = 0;
const icoArray = [
  'img/ico_carousel.png',
  'img/ico_carousel_0.png',
  ];
let curIcoInd = 0;
function icoPressed() {
    curImgInd++;
    curIcoInd++;
      if (curImgInd > imgArray.length - 1) {
        curImgInd = 0;
    }
    if (curIcoInd > icoArray.length - 1) {
      curIcoInd = 0;
    }
    const img = document.querySelector('.image-cont img')
    img.src = imgArray[curImgInd];
    const ico1 = document.querySelector('.ico1')
    ico1.src = icoArray[curIcoInd];
    const ico2 = document.querySelector('.ico2')
    ico2.src = icoArray[curIcoInd-1];
    const ico3 = document.querySelector('.ico3');
    ico3.src = icoArray[curIcoInd];
}
