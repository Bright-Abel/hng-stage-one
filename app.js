// ********** set date ************
const myDate = document.querySelector('#date');
let date = new Date();
let year = date.getFullYear();
myDate.textContent = year;

// ********** close links ************
const linksCont = document.querySelector('.links-container');
const links = document.querySelector('.links');
const toggleBtn = document.querySelector('.nav-toggle');

toggleBtn.addEventListener('click', () => {
  let linksContHeight = linksCont.getBoundingClientRect().height;
  // console.log(linksContHeight)
  const linksHeight = links.getBoundingClientRect().height;
  console.log(linksHeight);

  if (linksContHeight == 0 && linksHeight > 0) {
    linksCont.style.height = `${linksHeight}px`;
  } else {
    linksCont.style.height = '0';
  }
});

// ********** fixed navbar ************
const navBar = document.querySelector('#nav');
const scrollUp = document.querySelector('.top-link');
window.addEventListener('scroll', () => {
  navBarHeight = navBar.getBoundingClientRect().height;
  // console.log(window.pageYOffset)
  if (window.pageYOffset > navBarHeight) {
    navBar.classList.add('fixed-nav');
  } else {
    navBar.classList.remove('fixed-nav');
  }

  if (window.pageYOffset > 400) {
    scrollUp.classList.add('show-link');
  } else {
    scrollUp.classList.remove('show-link');
  }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) =>
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // NAVIGATE TO SPECIFIC SPOT

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    // console.log(element);

    linksContHeight = linksCont.getBoundingClientRect().height;
    let navBarH = navBar.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains('fixed-nav');
    let position = element.offsetTop - navBarH;
    if (!fixedNav) {
      position = position - navBarH;
    }
    if (navBarH > 82) {
      position = position + linksContHeight;
    }
    // console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksCont.style.height = '0';
  })
);

// ------------------ Curent Time In UTC -----------------
const time = document.getElementById('time');
const day = document.getElementById('day');

function updateTime() {
  const now = new Date();

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const newDay = days[now.getUTCDay()];

  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds} UTC`;
  time.textContent = timeString;
  day.textContent = newDay;
}

// Initial call to display the time immediately
updateTime();

// Update the time every second
setInterval(updateTime, 1000);

// select links
