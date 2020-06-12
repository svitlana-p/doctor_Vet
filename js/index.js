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
window.addEventListener('DOMContentLoaded', function () {
  // get the form elements defined in your form HTML above

  const form = document.getElementById('my-form');
  const button = document.getElementById('my-form-button');
  const status = document.getElementById('my-form-status');

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = 'display: none ';
    status.innerHTML = 'Thanks!';
  }

  function error() {
    status.innerHTML = 'Oops! There was a problem.';
  }

  // handle the form submission event

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

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