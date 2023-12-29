"use strict";

const account1 = {
  owner: "Prajwal Hiremath",
  movements: [
    200000, -13000, 230000, 250000, -60000, 223000, 265000, -50000, -26000,
    3000,
  ],
  interestRate: 0.7,
  pin: 1903,
  movementsDates: [
    "2023-09-01T07:42:02.383Z",
    "2023-09-30T21:31:17.178Z",
    "2023-09-30T21:31:17.178Z",
    "2023-09-30T21:31:17.178Z",
    "2023-09-30T21:31:17.178Z",
    "2023-10-03T07:42:02.904Z",
    "2023-10-07T07:42:02.185Z",
    "2023-10-11T07:42:02.604Z",
    "2023-10-12T07:42:02.194Z",
    "2023-10-20T07:42:02.929Z",
  ],
};
const account2 = {
  owner: "Tanmay Nidagundi",
  movements: [20000, -13000, 23000, 25000, -6000, 23000, 65000],
  interestRate: 1.7,
  pin: 3009,
  movementsDates: [
    "2023-09-30T21:31:17.178Z",
    "2023-10-01T07:42:02.383Z",
    "2023-10-03T07:42:02.904Z",
    "2023-10-07T07:42:02.185Z",
    "2023-10-11T07:42:02.604Z",
    "2023-10-12T07:42:02.194Z",
    "2023-10-20T07:42:02.929Z",
  ],
};

const accounts = [account1, account2];
// APP INTERFACE BUTTONS
const labelWelcome = document.querySelector(".welcome"),
  labelDate = document.querySelector(".date"),
  labelBalance = document.querySelector(".amount"),
  labelSumIn = document.querySelector(".income_amt"),
  labelSumOut = document.querySelector(".expense_amt"),
  labelSavings = document.querySelector(".save_amt"),
  labelTimer = document.querySelector(".timer"),
  btnTransfer = document.querySelector(".form__btn--transfer"),
  btnLoan = document.querySelector(".form__btn--loan"),
  btnFormClose = document.querySelector(".form__btn--close"),
  inputTransferTo = document.querySelector(".form__input--to"),
  inputTransferAmount = document.querySelector(".form__input--amount"),
  inputLoanAmount = document.querySelector(".form__input--loan-amount"),
  inputLoanPin = document.querySelector(".form__input--loan-pin"),
  transferPin = document.querySelector(".form__input--pin"),
  inputCloseUsername = document.querySelector(".form__input--user"),
  inputClosePin = document.querySelector(".form__close--pin"),
  inputLoginUsername = document.querySelector(".login__input--user"),
  inputLoginPin = document.querySelector(".login__input--pin"),
  btnLogin = document.querySelector(".login__btn"),
  containerMovements = document.querySelector(".movements_amount"),
  btnSort = document.querySelector(".exp_sort"),
  app = document.querySelector(".container"),
  profileName = document.querySelector(".profile_name"),
  profileImg = document.querySelector(".profile_img"),
  transferPinModel = document.querySelector(".form__btn--pin-model"),
  nextBtn = document.querySelector(".next-btn"),
  submitBtn = document.querySelector(".next-btn--2");

// WEBSITE BUTTONS
const setBtn = document.querySelectorAll(".set-btn"),
  setBtn2 = document.querySelectorAll(".set-btn2"),
  sidebar = document.querySelector(".sidebar"),
  menuList = document.querySelector(".menu_list"),
  logOutBtn = document.getElementById("log_out"),
  logOutModel = document.querySelector(".log-out--model"),
  logOut = document.querySelector(".logout-btn"),
  deleteAccount = document.querySelector(".confirm-btn"),
  transferModel = document.querySelector(".transfer_model"),
  transferMsg = document.querySelector(".transfer-msg"),
  loanModel = document.querySelector(".loan_model"),
  section1 = document.querySelector(".features "),
  nav = document.querySelector(".nav"),
  tabs = document.querySelectorAll(".operations-tab"),
  tabsContainer = document.querySelector(".operation-tab--container"),
  tabsContent = document.querySelectorAll(".operations-content"),
  slides = document.querySelectorAll(".slide"),
  btnLeft = document.querySelector(".slider__btn--left"),
  btnRight = document.querySelector(".slider__btn--right"),
  maxSlides = slides.length,
  dotsContainer = document.querySelector(".dots"),
  imageTargets = document.querySelectorAll(".feature-img"),
  openAccModel = document.querySelectorAll(".open-acc"),
  closeBtn = document.querySelector(".close-btn"),
  overlay = document.querySelector(".overlay"),
  loginForm = document.querySelector(".login-form"),
  showPin = document.querySelector(".eyeOn"),
  hidePin = document.querySelector(".eyeOff"),
  openLogModel = document.querySelector(".log-btn"),
  logModel = document.querySelector(".logform"),
  logOverlay = document.querySelector(".overlay-log--form"),
  btnClose = document.querySelector(".btn-close"),
  switchLog = document.querySelector(".exist-user"),
  switchReg = document.querySelector(".switch-to--reg"),
  header = document.querySelector("header"),
  btnPrivacy = document.querySelector(".privacy-btn"),
  btnTerms = document.querySelector(".terms-btn"),
  btnContacts = document.querySelector(".contact-btn"),
  closeFooter = document.querySelector(".footer-link"),
  btnOk = document.querySelectorAll(".btn-ok"),
  privacy = document.querySelector(".privacy"),
  terms = document.querySelector(".terms"),
  contacts = document.querySelector(".contacts"),
  mainOverlay = document.querySelector(".overlay-main"),
  notFound = document.querySelector(".not-found"),
  containerApp = document.querySelector(".app"),
  containerWeb = document.querySelector(".web_container"),
  logOutAcc = document.querySelector(".log_out--acc"),
  menuBar = document.querySelector(".menu_bar"),
  menuBarIcon = document.querySelectorAll(".menu_bar--icon");

// DARK MODE
let getMode = localStorage.getItem("mode");
console.log(getMode);
const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");

function darkMode() {}
if (getMode && getMode === "dark") {
  body.classList.add("dark");
  toggle.classList.add("active");
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (!body.classList.contains("dark")) {
    return localStorage.setItem("mode", "light");
  }
  return localStorage.setItem("mode", "dark");
});
toggle.addEventListener("click", () => toggle.classList.toggle("active"));
// STICKY NAVIGATION

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
headerObserver.observe(header);

// TABBED COMPONENT OPERATIONS

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations-tab");
  console.log(clicked);
  if (!clicked) return;
  tabs.forEach((t) => t.classList.remove("operations-tab--active"));
  clicked.classList.add("operations-tab--active");
  tabsContent.forEach((c) => c.classList.remove("operations-content--active"));
  document
    .querySelector(`.operations-content--${clicked.dataset.tab}`)
    .classList.add("operations-content--active");
});

//SLIDER

let curSlide = 0;

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const createDots = function () {
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

const activateDots = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
activateDots(0);

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlides - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDots(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDots(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDots(slide);
  }
});

// REVEAL SECTIONS
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.075,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// LAZY LOADING IMAGES

const loading = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("lazy-img");
};

const imgObserver = new IntersectionObserver(loading, {
  root: null,
  threshold: 0.3,
});

imageTargets.forEach((img) => imgObserver.observe(img));

// DATE FUNCTIONS
const d = new Date();
let day = `${d.getDate()}`.padStart(2, 0);
let month = `${d.getMonth() + 1}`.padStart(2, 0);
let year = d.getFullYear();
const hour = `${d.getHours()}`.padStart(2, 0);
const min = `${d.getMinutes()}`.padStart(2, 0);
labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  let day = `${date.getDate()}`.padStart(2, 0);
  let month = `${date.getMonth() + 1}`.padStart(2, 0);
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);
    let movIcon;
    if (type == "deposit") {
      movIcon = "bxs-credit-card";
    } else {
      movIcon = "bx-transfer-alt";
    }
    const formattedMov = new Intl.NumberFormat(acc.locale, {
      style: "currency",
      currency: "INR",
    }).format(mov);
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">
    <i class="bx ${movIcon}"></i></div>
    <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div>
        </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `₹ ${acc.balance.toFixed(2)}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `₹ ${incomes.toFixed(2)}`;

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `₹ ${Math.abs(outcomes).toFixed(2)}`;

  const interests = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 10)
    .reduce((acc, int) => acc + int, 0);
  labelSavings.textContent = `₹ ${interests.toFixed(2)}`;

  const incomePercent = ((outcomes / incomes) * 100).toFixed(2);
  document.querySelector(".expense_percent").textContent = `${Math.abs(
    incomePercent
  )}%`;

  const savingsPercent = ((interests / incomes) * 100).toFixed(2);
  document.querySelector(".savings_percent").textContent = `${Math.abs(
    savingsPercent
  )}%`;
};

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsername(accounts);

const updateUI = function (acc) {
  displayMovements(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const secs = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${secs}`;
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.display = "none";
      containerWeb.style.display = "block";
    }
    time--;
  };
  let time = 300;
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

let currentAccount, timer;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currentAccount) {
    console.log(currentAccount);
    if (currentAccount?.pin === "") {
      notFound.textContent = `Enter Valid details!`;
    } else if (currentAccount?.pin !== Number(inputLoginPin.value)) {
      notFound.textContent = "Invalid Password!";
      inputLoginUsername.value = inputLoginPin.value = "";
    } else if (currentAccount?.pin === Number(inputLoginPin.value)) {
      btnLogin.textContent = `Logging in...`;
      setTimeout(function () {
        labelWelcome.textContent = `Welcome back, ${
          currentAccount.owner.split(" ")[0]
        }`;
        inputLoginUsername.value = inputLoginPin.value = "";
        // window.location.replace("interface.html");
        updateUI(currentAccount);
        containerApp.style.display = "block";
        containerWeb.style.display = "none";
        logModel.classList.add("hidden");
        logModel.classList.remove("active");
        logOverlay.classList.add("hidden");
        profileName.textContent = currentAccount.owner;
        btnLogin.textContent = `Login`;
        if (timer) clearInterval(timer);
        timer = startLogoutTimer();
      }, 3000);
    }
  } else {
    notFound.textContent = "User not found!";
    inputLoginUsername.value = inputLoginPin.value = "";
  }
});

transferPinModel.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputTransferTo.value !== "" && inputTransferAmount.value !== "") {
    document.querySelector(".operation--transfer").style.display = "none";
    document.querySelector(".operation--transfer-pin").style.display = "block";
    document.querySelector(".form__input--pin").focus();
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  setTimeout(() => {
    if (
      amount > 0 &&
      receiverAcc &&
      currentAccount.balance >= amount &&
      receiverAcc?.username !== currentAccount.username &&
      currentAccount?.pin === Number(transferPin.value)
    ) {
      document.getElementById("process_id").textContent = `Processing!`;
      transferMsg.textContent = `Sending ₹${amount} to ${receiverAcc.owner}.`;
      setTimeout(function () {
        document.getElementById("process_id").textContent = `Sent!`;
        transferMsg.textContent = `₹${amount} Debited from account.`;
      }, 3000);
      setTimeout(function () {
        transferModel.classList.remove("active");
        mainOverlay.classList.add("hidden");
      }, 5000);
      inputTransferAmount.value = inputTransferTo.value = "";
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      receiverAcc.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
      transferModel.classList.add("active");
      mainOverlay.classList.remove("hidden");
      document.querySelector(".operation--transfer").style.display = "block";
      document.querySelector(".operation--transfer-pin").style.display = "none";
      transferPin.value = "";
    }
  });
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1) &&
    currentAccount?.pin === Number(inputLoanPin.value)
  ) {
    loanModel.classList.add("active");
    mainOverlay.classList.remove("hidden");
    document.getElementById("process_id2").textContent = `Processing!`;
    document.querySelector(
      ".transfer-msg2"
    ).textContent = `Requested loan for amount ₹${amount}.`;
    setTimeout(function () {
      document.getElementById("process_id2").textContent = `Approved!`;
      document.querySelector(
        ".transfer-msg2"
      ).textContent = `₹${amount} Credited to account.`;
    }, 3000);
    setTimeout(function () {
      loanModel.classList.remove("active");
      mainOverlay.classList.add("hidden");
    }, 5000);
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
    }, 5000);
    inputLoanAmount.value = "";
    inputLoanPin.value = "";
  }
});

document.querySelector(".transfer").addEventListener("click", function (e) {
  e.preventDefault();
  inputTransferTo.focus();
});

const deleteModel = document.querySelector(".delete_model");

btnFormClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    deleteModel.classList.add("active");
    mainOverlay.classList.remove("hidden");
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
  }
  inputClosePin.value = inputCloseUsername.value = "";
});

// OTHER WEBSITE COMPONENTS
// PIN VISIBILITY
function showPwd() {
  var show = document.getElementById("show");
  if (show.type === "password") {
    show.type = "text";
  } else {
    show.type = "password";
  }
}

showPin.addEventListener("click", function (e) {
  e.preventDefault();
  showPwd();
  showPin.style.display = "none";
  hidePin.style.display = "block";
});

hidePin.addEventListener("click", function (e) {
  e.preventDefault();
  showPwd();
  showPin.style.display = "block";
  hidePin.style.display = "none";
});

const openModel = function (e) {
  e.preventDefault();
  overlay.classList.remove("hidden");
  loginForm.classList.remove("hidden");
  loginForm.classList.add("active");
};
const closeModel = function (e) {
  e.preventDefault();
  overlay.classList.add("hidden");
  loginForm.classList.add("hidden");
  loginForm.classList.remove("active");
};

openAccModel.forEach(function (btn) {
  btn.addEventListener("click", openModel);
});
closeBtn.addEventListener("click", closeModel);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModel();
});

const openLog = function (e) {
  e.preventDefault();
  logModel.classList.remove("hidden");
  logModel.classList.add("active");
  logOverlay.classList.remove("hidden");
  document.querySelector(".login__input--user").focus();
};

const closeLog = function (e) {
  e.preventDefault();
  logModel.classList.add("hidden");
  logModel.classList.remove("active");
  logOverlay.classList.add("hidden");
};

openLogModel.addEventListener("click", openLog);
btnClose.addEventListener("click", closeLog);
switchLog.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.add("hidden");
  loginForm.classList.add("hidden");
  loginForm.classList.remove("active");
  logModel.classList.remove("hidden");
  logModel.classList.add("active");
  logOverlay.classList.remove("hidden");
});

switchReg.addEventListener("click", function (e) {
  e.preventDefault();
  logModel.classList.add("hidden");
  logModel.classList.remove("active");
  logOverlay.classList.add("hidden");
  overlay.classList.remove("hidden");
  loginForm.classList.remove("hidden");
  loginForm.classList.add("active");
});

btnPrivacy.addEventListener("click", function (e) {
  e.preventDefault();
  privacy.classList.add("active");
  mainOverlay.classList.remove("hidden");
});

btnTerms.addEventListener("click", function (e) {
  e.preventDefault();
  terms.classList.add("active");
  mainOverlay.classList.remove("hidden");
  var check = document.querySelector(".terms-agree");
  if (check.checked === true) check.checked = "";
});

btnContacts.addEventListener("click", function (e) {
  e.preventDefault();
  contacts.classList.add("active");
  mainOverlay.classList.remove("hidden");
});

btnOk.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    privacy.classList.remove("active");
    terms.classList.remove("active");
    contacts.classList.remove("active");
    logOutModel.classList.remove("active");
    deleteModel.classList.remove("active");
    mainOverlay.classList.add("hidden");
  });
});

function enable() {
  var check = document.querySelector(".terms-agree");
  var btn = document.querySelector("#terms-btn");
  if (check.checked) {
    btn.removeAttribute("disabled");
  } else {
    btn.addAttribute("disabled");
  }
}
document.querySelector(".bx-menu").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".nav-links").classList.toggle("active");
  document.querySelector(".bx-menu").style.display = "none";
  document.querySelector(".bx-x").style.display = "block";
});

document.querySelector(".bx-x").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".nav-links").classList.toggle("active");
  document.querySelector(".bx-menu").style.display = "block";
  document.querySelector(".bx-x").style.display = "none";
});

logOut.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".delete_head").textContent = `Closing...`;
  document.querySelector(
    ".delete_text"
  ).textContent = `After deleting account you will be redirected to Login Page.`;
  document.querySelector("#btns").style.display = "none";
  document.querySelector("#delete_btn").style.display = "none";
  setTimeout(function () {
    document.querySelector(".delete_head").textContent = `Finished!`;
    document.querySelector(
      ".delete_text"
    ).textContent = `Your account is successfully closed.`;
  }, 3000);
  setTimeout(function () {
    containerApp.style.display = "none";
    containerWeb.style.display = "block";
    deleteModel.classList.remove("active");
    mainOverlay.classList.add("hidden");
  }, 5000);
});

deleteAccount.addEventListener("click", function (e) {
  e.preventDefault();
  if (containerWeb.style.display == "none") {
    document.querySelector("#logout_head").textContent = "Logging out...";
    document.querySelector("#logout_text").textContent = "Have a great day!";
    document.querySelector("#logout-btns").style.display = "none";
    document.querySelector("#logout_cross").style.display = "none";
    setTimeout(function () {
      document.querySelector("#logout_head").textContent = "Logged out!";
      document.querySelector("#logout_text").textContent =
        "You will be redirected to Login page.";
    }, 3000);
    setTimeout(function () {
      logOutModel.classList.remove("active");
      logOverlay.classList.add("hidden");
      mainOverlay.classList.add("hidden");
      containerApp.style.display = "none";
      containerWeb.style.display = "block";
    }, 5000);
  }
});

setBtn.forEach(function (btn) {
  btn.onclick = function (e) {
    e.preventDefault();
    sidebar.classList.toggle("active");
  };
});
menuBarIcon.forEach(function (btn) {
  btn.onclick = function (e) {
    e.preventDefault();
    menuBar.classList.toggle("active");
  };
});

nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("login_form1").style.display = "none";
  document.getElementById("login_form2").style.display = "flex";
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("login_form2").style.display = "none";
  document.getElementById("login_form3").style.display = "flex";
});

logOutAcc.addEventListener("click", function (e) {
  e.preventDefault();
  mainOverlay.classList.remove("hidden");
  logOutModel.classList.add("active");
});
