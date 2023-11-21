const notifactionBtn = document.querySelector("#notifactionBtn");
const profileBtn = document.querySelector("#profileBtn");
const mainDrop = document.querySelector("#main_drop");
const notifactionDrop = document.querySelector("#notifaction_drop");

notifactionBtn.addEventListener("click", () => {
  notifactionDrop.classList.toggle("d-none");
  mainDrop.classList.add("d-none");
});

profileBtn.addEventListener("click", () => {
  mainDrop.classList.toggle("d-none");
  notifactionDrop.classList.add("d-none");
});

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
  },

  {
    id: 3,
    title: "Add your custome domain",
    subText:
      "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.",
    buttonTextOne: "Add domain",
    imageUrl: "https://crushingit.tech/hackathon-assets/website.png",
    isCompleted: false,
  },

  {
    id: 4,
    title: "Name your store",
    subText:
      "Your temporary store name is currently Davil collections. The store name appears in your domain and your online store.",
    buttonTextOne: "Name store",
    imageUrl: "https://crushingit.tech/hackathon-assets/name-store.png",
    isCompleted: false,
  },

  {
    id: 5,
    title: "Set up a payment provider",
    subText:
      "Choose a payment provider to start accepting payments. You'll need to create an account with the payment provider and set it up with your Shopify store.",
    buttonTextOne: "Set up payment",
    imageUrl: "https://crushingit.tech/hackathon-assets/payment.png",
    isCompleted: false,
  },
];

let currentStep = 1;
const stepMain = document.querySelector(".step_main");

function setCurrentStep(id) {
  currentStep = id;
  wrapperContent.innerHTML = "";

  if (currentStep === id) {
    stepsData.forEach((data) => {
      const { id, title, subText, buttonTextOne, buttonTextTwo, imageUrl } =
        data;

      return (wrapperContent.innerHTML += `<div class="step_main ${
        currentStep === id ? "active" : ""
      } rounded p-3">
        <div class="flex">
          <div class="mr-auto">
            <div class="flex gap-5">
              <div class="steps_ico cursor_pointer" onclick="completeStep(${id})">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
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
                </svg>
              </div>
    
              <div>
                <button onclick="setCurrentStep(${id})" class="text-dark step_main_head w-full cursor_pointer text-md font-bold">
                  ${title}
                </button>
    
                <div class="mt-3 step_content">
                  <div class="text-light text-md step_sub_text">
                    ${subText}
                    <br class="lg_hidden" />
                    <a href="" class="step_link font-medium text-base">
                      Learn more
                    </a>
                  </div>
    
                  <div class="mt-5">
                    <div class="flex gap-10">
                      <button class="btn-dark">${buttonTextOne}</button>
    
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

function completeStep(id) {
  console.log(id);
}

stepsData.forEach((data) => {
  const { id, title, subText, buttonTextOne, buttonTextTwo, imageUrl } = data;

  return (wrapperContent.innerHTML += `<div class="step_main ${
    currentStep === id ? "active" : ""
  } rounded p-3">
    <div class="flex">
      <div class="mr-auto">
        <div class="flex gap-5">
        <div class="steps_ico cursor_pointer" onclick="completeStep(${id})">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
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
        </svg>
      </div>

          <div>
            <button onclick="setCurrentStep(${id})" class="text-dark step_main_head w-full cursor_pointer text-md font-bold">
              ${title}
            </button>

            <div class="mt-3 step_content">
              <div class="text-light text-md step_sub_text">
                ${subText}
                <br class="lg_hidden" />
                <a href="" class="step_link font-medium text-base">
                  Learn more
                </a>
              </div>

              <div class="mt-5">
                <div class="flex gap-10">
                  <button class="btn-dark">${buttonTextOne}</button>

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

      <div class="step_img_cont">
        <img
          src=${imageUrl}
          alt="png image"
        />
      </div>
    </div>
  </div>`);
});

const formWrap = document.querySelector('.form_wrap');
formWrap.addEventListener('submit', function (e) {
  e.preventDefault();
})

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
