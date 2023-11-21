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
    `
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
  `
}
