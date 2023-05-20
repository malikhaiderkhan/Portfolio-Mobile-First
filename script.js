const hamburg = document.getElementById('hamburg');
const xSection = document.querySelector('.x-section');
const menuToggle = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.items-menu');

function toggleMenu() {
  menuToggle.classList.toggle('show');
}

xSection.addEventListener('click', toggleMenu);
hamburg.addEventListener('click', toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});

const cardsData = [
  {
    id: 'portfolio1',
    class: 'work',
    img: './assets/images/card1.png',
    img2: './assets/images/card1.png',
    title: 'Tonic',
    title2: 'Tonic',
    infoMob1: 'CANOPY',
    infoMob2: 'Back End Dev',
    infoMob3: '2015',
    infoDesk1: 'CANOPY',
    infoDesk2: 'Back End Dev',
    infoDesk3: '2015',
    p1: 'A daily selection of privately personalized reads; no accounts orsign-ups required.',
    p2: 'A daily selection of privately personalized reads; no accounts orsign-ups required.',
    langMob1: 'HTML',
    langMob2: 'CSS',
    langMob3: 'JavaScript',
    langDesk1: 'HTML',
    langDesk2: 'CSS',
    langDesk3: 'JavaScript',
    langDesk4: '',
    classButtons: 'work-button',
    onClickButton: '0',
  },
  {
    id: 'portfolio2',
    class: 'work multipost',
    img: './assets/images/card2.png',
    img2: './assets/images/card2.png',
    title: 'Multi-Post Stories',
    title2: 'Multi-Post Stories',
    infoMob1: 'CANOPY',
    infoMob2: 'Back End Dev',
    infoMob3: '2015',
    infoDesk1: 'FACEBOOK',
    infoDesk2: 'Full Stuck Dev',
    infoDesk3: '2015',
    p1: 'A daily selection of privately personalized reads; no accounts orsign-ups required.',
    p2: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    langMob1: 'HTML',
    langMob2: 'CSS',
    langMob3: 'JavaScript',
    langDesk1: 'HTML',
    langDesk2: 'Ruby on rails',
    langDesk3: 'CSS',
    langDesk4: 'JavaScript',
    classButtons: 'work-button',
    onClickButton: '1',
  },
  {
    id: 'portfolio3',
    class: 'work selected',
    img: './assets/images/card3.png',
    img2: './assets/images/card3.png',
    title: 'Tonic',
    title2: 'Facebook 360',
    infoMob1: 'CANOPY',
    infoMob2: 'Back End Dev',
    infoMob3: '2015',
    infoDesk1: 'FACEBOOK',
    infoDesk2: 'Full Stuck Dev',
    infoDesk3: '2015',
    p1: 'A daily selection of privately personalized reads; no accounts orsign-ups required.',
    p2: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    langMob1: 'HTML',
    langMob2: 'CSS',
    langMob3: 'JavaScript',
    langDesk1: 'HTML',
    langDesk2: 'Ruby on rails',
    langDesk3: 'CSS',
    langDesk4: 'JavaScript',
    classButtons: 'work-button button-corrected ',
    onClickButton: '2',
  },
  {
    id: 'portfolio4',
    class: 'work multipost',
    img: './assets/images/card4.png',
    img2: './assets/images/card4.png',
    title: 'Multi-Post Stories',
    title2: 'Uber Navigation',
    infoMob1: 'CANOPY',
    infoMob2: 'Back End Dev',
    infoMob3: '2015',
    infoDesk1: 'Uber',
    infoDesk2: 'Lead Developer',
    infoDesk3: '2015',
    p1: 'A daily selection of privately personalized reads; no accounts orsign-ups required.',
    p2: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    langMob1: 'HTML',
    langMob2: 'CSS',
    langMob3: 'JavaScript',
    langDesk1: 'HTML',
    langDesk2: 'Ruby on rails',
    langDesk3: 'CSS',
    langDesk4: 'JavaScript',
    classButtons: 'work-button',
    onClickButton: '3',
  },
];

let cards = '';
cardsData.forEach((card) => {
  cards += `
    <div id="${card.id}" class="${card.class}">
      <img class="work-img img-replace" src="${card.img}" />
      <img class="new-image" src="${card.img2}" />
      <div class="work-content">
        <h2 class="work-title">${card.title}</h2>
        <h2 class="desktop-title">${card.title2}</h2>
        <ul class="info-mobile">
          <li>${card.infoMob1}</li>
          <img src="./assets/images/point.png" />
          <li>${card.infoMob2}</li>
          <img src="./assets/images/point.png" />
          <li>${card.infoMob3}</li>
        </ul>
        <ul class="info-desktop">
          <li>${card.infoDesk1}</li>
          <img src="./assets/images/point.png" />
          <li>${card.infoDesk2}</li>
          <img src="./assets/images/point.png" />
          <li>${card.infoDesk3}</li>
        </ul>
        <p class="work-p old-p">
          ${card.p1}
        </p>
        <p id="p2p" class="new-p">
          ${card.p2}
        </p>
        <ul class="languages-hidden">
          <li>${card.langMob1}</li>
          <li>${card.langMob2}</li>
          <li>${card.langMob3}</li>
        </ul>
        <ul class="languages-ruby">
          <li>${card.langDesk1}</li>
          <li>${card.langDesk2}</li>
          <li>${card.langDesk3}</li>
          <li>${card.langDesk4}</li>
        </ul>
        <button class="${card.classButtons}" onclick="onClickProject(${card.onClickButton})">See Project</button>
      </div>
    </div>
  ;`;
});

document.querySelector('#section2').innerHTML = cards;

const projects = [
  {
    name: 'Tonic',
    details: ['CANOPY', 'Back End Dev', '2015'],
    img: './assets/images/popup-mb.png',
    img2: './assets/images/popup.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s",
    tag: ['HTML', 'CSS', 'JavaScript'],
    tag2: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: '',
    fontLink: '',
  },
  {
    name: 'Multi-Post Stories',
    details: ['FACEBOOK', 'Full Stuck Dev', '2015'],
    img: './assets/images/popup-mb.png',
    img2: './assets/images/popup.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s",
    tag: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    tag2: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: '',
    fontLink: '',
  },
  {
    name: 'Facebook 360',
    details: ['FACEBOOK', 'Full Stuck Dev', '2015'],
    img: './assets/images/popup-mb.png',
    img2: './assets/images/popup.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s",
    tag: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    tag2: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: '',
    fontLink: '',
  },
  {
    name: 'Uber Navigation',
    details: ['Uber', 'Lead Developer', '2018'],
    img: './assets/images/popup-mb.png',
    img2: './assets/images/popup.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s",
    tag: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    tag2: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: '',
    fontLink: '',
  },
];

function showPopup() {
  const Model = document.getElementById('Model');
  Model.classList.add('show');
}

function closePopup() {
  const Model = document.getElementById('Model');
  Model.classList.remove('show');
}

/* eslint-disable */

function onClickProject(index) {
  const project = projects[index];

  const projectHTML =` 
  <div class="popup">
  <div class="popup-header">
      <h5 class="popup-name">${project.name}</h5>
      <button class="popup-btn-close">
        <img src="./assets/images/x-icon.png" alt="" />
      </button>
    </div>
    <ul class="popup-details">
      <li class="detail1">${project.details[0]}</li>
      <img src="./assets/images/Counter.png" alt="" />
      <li class="detail2">${project.details[1]}</li>
      <img src="./assets/images/Counter.png" alt="" />
      <li class="detail3">${project.details[2]}</li>
    </ul>
    <div class="popup-img-container">
      <img src="${project.img}" alt="Project Image" />
    </div>
    <div class="popup-img-container-desktop">
      <img src="${project.img2}" alt="Project Image" />
    </div>
    <div class="popup-body">
      <div class="popup-desc-container-mobile">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
      </div>
      <div class="popup-desc-container-desktop">
      <p>${project.description}</p>
      </div>
      <div class="tech-and-buttons">
      <div class="popup-tag-buttons">
        <ul class="popup-tag">
          <li class="popup-tag1">${project.tag[0]}</li>
          <li class="popup-tag2">${project.tag[1]}</li>
          <li class="popup-tag3">${project.tag[2]}</li>
        </ul>
      </div>
      <div class="popup-tech-buttons-desk">
        <ul class="popup-tag">
          <li class="popup-tag1">${project.tag2[0]}</li>
          <li class="popup-tag2">${project.tag2[1]}</li>
          <li class="popup-tag3">${project.tag2[2]}</li>
        </ul>
        <ul class="popup-tag">
          <li class="popup-tag4">${project.tag2[3]}</li>
          <li class="popup-tag5">${project.tag2[4]}</li>
        </ul>
      </div>
      <div class="popup-buttons">
        <a href="${project.liveLink}" class="popup-button1">
        See Live
          <img src="./assets/images/button1.png" alt="Icono"/>
        </a>
        <a href="${project.fontLink}" class="popup-button2">
        See source
          <img src="./assets/images/button2.png" alt="Icono" />
        </a>
      </div>
      
      </div>
    </div>
  
  
  </div>
  ;`

  Model.innerHTML = projectHTML;
  showPopup();

  const closeButton = document.querySelector(".popup-btn-close");
  closeButton.addEventListener("click", closePopup);
}

/* validation of form */

const form = document.querySelector('#form');

function validateEmail() {
  const emailInput = document.querySelector('#email');
  const email = emailInput.value.trim();

  if (email !== email.toLowerCase()) {
    const errorElement = document.createElement('span');
    errorElement.classList.add('error-message');
    errorElement.textContent = '*********Email must be in lower case.********';

    const submitButton = document.querySelector('#button-form');
    submitButton.insertAdjacentElement('afterend', errorElement);
  } else {
    form.submit();
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateEmail();
});

