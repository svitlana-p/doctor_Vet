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
window.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('my-form');
  const button = document.getElementById('my-form-button');
  const status = document.getElementById('my-form-status');

  const formModal = document.getElementById('formModal');
  const buttonModal = document.getElementById('buttonModal');
  const statusModal = document.getElementById('statusModal');

  function success() {
    form.reset();
    button.style = 'display: none ';
    status.innerHTML = 'Thanks!';
  }
  function successModal() {
    formModal.reset();
    buttonModal.style = 'display: none ';
    statusModal.innerHTML = 'Thanks!';
  }

  function error() {
    status.innerHTML = 'Oops! There was a problem.';
  }
 function errorModal() {
   statusModal.innerHTML = 'Oops! There was a problem.';
 }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });

formModal.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const dataM = new FormData(formModal);
    ajax(formModal.method, formModal.action, dataM, successModal, errorModal);
  });
});

function ajax(method, url, data, success, error) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
