const notifactionBtn = document.querySelector("#notifactionBtn");
const profileBtn = document.querySelector("#profileBtn");
const mainDrop = document.querySelector("#main_drop");
const notifactionDrop = document.querySelector("#notifaction_drop");

notifactionBtn.addEventListener("click", () => {
  notifactionDrop.classList.toggle("d-none");
  mainDrop.classList.add("d-none");
});

// open notification menu on Ctrl+n
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'q') {
    notifactionDrop.classList.toggle("d-none");
    mainDrop.classList.add("d-none");
  }
})

profileBtn.addEventListener("click", () => {
  mainDrop.classList.toggle("d-none");
  notifactionDrop.classList.add("d-none");
});

// open profile menu on Ctrl+n
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
    mainDrop.classList.toggle("d-none");
    notifactionDrop.classList.add("d-none");
  }
})

// callout logic

const closeCalloutBtn = document.querySelector("#closeCalloutBtn");
const callout = document.querySelector(".callout");
const setupWrap = document.querySelector(".setup_wrap");

closeCalloutBtn.addEventListener("click", () => {
  callout.classList.add("d-none");
  setupWrap.classList.remove("mt-4");
});

const wrapperBtn = document.querySelector("#wrapper_btn");
const wrapperContent = document.querySelector("#wrapperContent");

wrapperBtn.addEventListener("click", () => {
  wrapperContent.classList.toggle("d-none");

  if (wrapperContent.classList.contains("d-none")) {
    wrapperBtn.innerHTML = `<svg width="25" height="25" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" fill="none" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="#fff"/>
    </svg>              `;
  } else {
    wrapperBtn.innerHTML = `<svg width="25" height="25" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" fill="none" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#fff"/>
    </svg>
    `;
  }
});

if (wrapperContent.classList.contains("d-none")) {
  wrapperBtn.innerHTML = `<svg width="25" height="25" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="#fff"/>
  </svg>              `;
} else {
  wrapperBtn.innerHTML = `<svg width="25" height="25" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#fff"/>
  </svg>
  `;
}

// steps data

const stepsData = [
  {
    id: 1,
    title: "Customize your online store",
    subText:
      "Choose a theme and add your logo, colors, and images to reflect your brand.",
    buttonTextOne: "Customize theme",
    imageUrl: "https://crushingit.tech/hackathon-assets/customise-store.png",
    isCompleted: false,
    widht: "20%"
  },

  {
    id: 2,
    title: "Add your first product",
    subText:
      "Write a description, add photos, and set pricing for the products you plan to sell.",
    buttonTextOne: "Add product",
    buttonTextTwo: "Import product",
    imageUrl: "https://crushingit.tech/hackathon-assets/product.png",
    isCompleted: false,
    widht: "40%"
  },

  {
    id: 3,
    title: "Add your custome domain",
    subText:
      "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.",
    buttonTextOne: "Add domain",
    imageUrl: "https://crushingit.tech/hackathon-assets/website.png",
    isCompleted: false,
    widht: "60%"
  },

  {
    id: 4,
    title: "Name your store",
    subText:
      "Your temporary store name is currently Davil collections. The store name appears in your domain and your online store.",
    buttonTextOne: "Name store",
    imageUrl: "https://crushingit.tech/hackathon-assets/name-store.png",
    isCompleted: false,
    widht: "80%"
  },

  {
    id: 5,
    title: "Set up a payment provider",
    subText:
      "Choose a payment provider to start accepting payments. You'll need to create an account with the payment provider and set it up with your Shopify store.",
    buttonTextOne: "Set up payment",
    imageUrl: "https://crushingit.tech/hackathon-assets/payment.png",
    isCompleted: false,
    widht: "100%"
  },
];

let currentStep = 1;
const stepMain = document.querySelector(".step_main");

const progressBar = document.querySelector('.bar')
const counterEl = document.querySelector('#counter')
let currentWidth = 0;
let currentStepEl = 0
counterEl.innerText = currentStepEl;
// progressBar.style.width = `${currentWidth}%`

function completeStep(id) {
  if(stepsData[id - 1].isCompleted) {
    stepsData[id - 1].isCompleted = false
    wrapperContent.innerHTML = "";
    stepsData.forEach((data) => {
      const {
        id,
        title,
        subText,
        buttonTextOne,
        buttonTextTwo,
        imageUrl,
        isCompleted,
      } = data;
  
      return (wrapperContent.innerHTML += `<div class="step_main ${
        currentStep === id ? "active" : ""
      } rounded p-2_5 pb-4">
        <div class="flex">
          <div class="mr-auto w-2_5">
            <div class="flex gap-3 items-stretch">
              <div>
                <button role="button" aria-lable="Step ${id} check button, press enter to mark step ${id} as completed" class="steps_ico check_btn p-0 cursor_pointer" onclick="completeStep(${id})">
                  ${
                    isCompleted
                      ? `<svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#303030"></circle>
                  <path
                    d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
                    fill="#fff"
                  ></path>
                </svg>`
                      : `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="12"
                  stroke="#00000075"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="4 6"
                />
              </svg>`
                  }
                </button>
              </div>
    
              <div>
                <button onclick="setCurrentStep(${id})" class="text-dark step_main_head cursor_pointer text-lg font-bold">
                  ${title}
                </button>
    
                <div class="px-2_5">
                  <div class="mt-3 step_content">
                    <p class="text-light text-md font-medium">
                      ${subText}
                      <a href="" class="step_link font-bold text-lg">
                        Learn more
                      </a>
                    </p>
      
                    <div class="mt-4">
                      <div class="flex gap-6">
                        <button class="btn-dark text-white text-sm">${buttonTextOne}</button>
      
                        ${
                          buttonTextTwo === undefined
                            ? ""
                            : `<button class="btn_transparent font-bold">
                        ${buttonTextTwo}
                      </button>`
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div class="step_img_cont">
            <img
              src=${imageUrl}
              alt="png image"
            />
          </div>
        </div>
      </div>`);
    });
    currentStepEl--
    counterEl.innerHTML = currentStepEl;
    currentWidth -= 20;
    progressBar.style.width = `${currentWidth}%`
  } else {
    stepsData[id - 1].isCompleted = true;
    currentStepEl++
    counterEl.innerHTML = currentStepEl;
    currentWidth += 20;
    progressBar.style.width = `${currentWidth}%`;
    currentStep = id + 1
    wrapperContent.innerHTML = "";

    if (currentStep === id + 1) {
      stepsData.forEach((data) => {
        const {
          id,
          title,
          subText,
          buttonTextOne,
          buttonTextTwo,
          imageUrl,
          isCompleted,
        } = data;
  
        return (wrapperContent.innerHTML += `<div class="step_main ${
          currentStep === id ? "active" : ""
        } rounded p-2_5 pb-4">
          <div class="flex">
            <div class="mr-auto w-2_5">
              <div class="flex gap-3 items-stretch">
                <div>
                  <button role="button" aria-lable="Step ${id} check button, press enter to mark step ${id} as completed" class="steps_ico check_btn p-0 cursor_pointer" onclick="completeStep(${id})">
                    ${
                      isCompleted
                        ? `<svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#303030"></circle>
                    <path
                      d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
                      fill="#fff"
                    ></path>
                  </svg>`
                        : `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="12"
                    stroke="#00000075"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="4 6"
                  />
                </svg>`
                    }
                  </button>
                </div>
      
                <div>
                  <button onclick="setCurrentStep(${id})" class="text-dark step_main_head cursor_pointer text-lg font-bold">
                    ${title}
                  </button>
      
                  <div class="px-2_5">
                    <div class="mt-3 step_content">
                      <p class="text-light text-md font-medium">
                        ${subText}
                        <a href="" class="step_link font-bold text-lg">
                          Learn more
                        </a>
                      </p>
        
                      <div class="mt-4">
                        <div class="flex gap-6">
                          <button class="btn-dark text-white text-sm">${buttonTextOne}</button>
        
                          ${
                            buttonTextTwo === undefined
                              ? ""
                              : `<button class="btn_transparent font-bold">
                          ${buttonTextTwo}
                        </button>`
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <div class="step_img_cont">
              <img
                src=${imageUrl}
                alt="png image"
              />
            </div>
          </div>
        </div>`);
      });
    } else {
      null;
    }
  }
}

function setCurrentStep(id) {
  currentStep = id;
  wrapperContent.innerHTML = "";

  if (currentStep === id) {
    stepsData.forEach((data) => {
      const {
        id,
        title,
        subText,
        buttonTextOne,
        buttonTextTwo,
        imageUrl,
        isCompleted,
      } = data;
    
      return (wrapperContent.innerHTML += `<div class="step_main ${
        currentStep === id ? "active" : ""
      } rounded p-2_5 pb-4">
        <div class="flex">
          <div class="mr-auto w-2_5">
            <div class="flex gap-3 items-stretch">
              <div>
                <button role="button" aria-label="Step ${id} check button, press enter to mark step ${id} as completed" class="steps_ico check_btn p-0 cursor_pointer" onclick="completeStep(${id})">
                  ${
                    isCompleted
                      ?  `<svg class="spinner" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 28 28" fill="none">
                      <path
                        d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
                        stroke="none"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>`
                      : `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="12"
                  stroke="#00000075"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="4 6"
                />
              </svg>`
                  }
                </button>
              </div>
    
              <div>
                <button role="button" aria-label="Step ${id} step button, press enter to expand step ${id} detail" onclick="setCurrentStep(${id})" class="text-dark step_main_head cursor_pointer text-lg font-bold">
                  ${title}
                </button>
    
                <div class="px-2_5">
                  <div class="mt-3 step_content">
                    <p role="alert" aria-lebelledby="subText" class="text-light text-md font-medium">
                      ${subText}
                      <a href="" class="step_link font-bold text-lg">
                        Learn more
                      </a>
    
                      <span class="sr-only" aria-live="polite" id="subText">${subText}</span>
                    </p>
      
                    <div class="mt-4">
                      <div class="flex gap-6">
                        <a class="no-underline" href="https://admin.shopify.com">
                        <button role="button" aria-label="Step ${id} button. Press enter to learn more from admin.shopify.com" class="btn-dark text-white text-sm">${buttonTextOne}</button>
      
                        ${
                          buttonTextTwo === undefined
                            ? ""
                            : `<button class="btn_transparent font-bold">
                        ${buttonTextTwo}
                      </button>`
                        }
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div class="step_img_cont">
            <img
              role="img"
              aria-label="${title} png image"
              src=${imageUrl}
              alt="png image"
            />
          </div>
        </div>
      </div>`);
    });
  } else {
    null;
  }
}

stepsData.forEach((data) => {
  const {
    id,
    title,
    subText,
    buttonTextOne,
    buttonTextTwo,
    imageUrl,
    isCompleted,
  } = data;

  return (wrapperContent.innerHTML += `<div class="step_main ${
    currentStep === id ? "active" : ""
  } rounded p-2_5 pb-4">
    <div class="flex">
      <div class="mr-auto w-2_5">
        <div class="flex gap-3 items-stretch">
          <div>
            <button role="button" aria-label="Step ${id} check button, press enter to mark step ${id} as completed" class="steps_ico check_btn p-0 cursor_pointer" onclick="completeStep(${id})">
              ${
                isCompleted
                  ?  `<svg class="spinner" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 28 28" fill="none">
                  <path
                    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
                    stroke="none"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>`
                  : `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle
              cx="16"
              cy="16"
              r="12"
              stroke="#00000075"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="4 6"
            />
          </svg>`
              }
            </button>
          </div>

          <div>
            <button role="button" aria-label="Step ${id} step button, press enter to expand step ${id} detail" onclick="setCurrentStep(${id})" class="text-dark step_main_head cursor_pointer text-lg font-bold">
              ${title}
            </button>

            <div class="px-2_5">
              <div class="mt-3 step_content">
                <p role="alert" aria-lebelledby="subText" class="text-light text-md font-medium">
                  ${subText}
                  <a href="" class="step_link font-bold text-lg">
                    Learn more
                  </a>

                  <span class="sr-only" aria-live="polite" id="subText">${subText}</span>
                </p>
  
                <div class="mt-4">
                  <div class="flex gap-6">
                    <a class="no-underline" href="https://admin.shopify.com">
                    <button role="button" aria-label="Step ${id} button. Press enter to learn more from admin.shopify.com" class="btn-dark text-white text-sm">${buttonTextOne}</button>
  
                    ${
                      buttonTextTwo === undefined
                        ? ""
                        : `<button class="btn_transparent font-bold">
                    ${buttonTextTwo}
                  </button>`
                    }
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="step_img_cont">
        <img
          role="img"
          aria-label="${title} png image"
          src=${imageUrl}
          alt="png image"
        />
      </div>
    </div>
  </div>`);
});

const formWrap = document.querySelector(".form_wrap");
formWrap.addEventListener("submit", function (e) {
  e.preventDefault();
});

// screen reader logic
// let tags = document.querySelectorAll(
//   "div, h1, h2, h3, h4, h5, h6, p, button, a, span"
// );
// let msg = new SpeechSynthesisUtterance();
// tags.forEach((tag) => {
//   tag.addEventListener("click", (e) => {
//     msg.text = e.target.innerText;
//     speechSynthesis.speak(msg);
//   });
// });
