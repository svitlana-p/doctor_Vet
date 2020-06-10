document.querySelector('.ico-cont').addEventListener('click', icoPressed);
const imgArray = [
  'img/phone_to_vet.jpg',
  'img/questions.jpg',
  'img/fin_plan.jpg',
];
let curImgInd = 0;

function icoPressed() {
    curImgInd++;
    if (curImgInd > imgArray.length - 1) {
        curImgInd = 0;
    }
    const img = document.querySelector('.image-cont img')
    img.src = imgArray[curImgInd];
}
