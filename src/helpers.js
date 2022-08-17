export const paintBox = (nthBox, player) => {
  let boxes = [...document.getElementsByClassName("gameBoxItem")];
  boxes[nthBox].innerHTML = player
    ? `
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="white"/>
  <path class="Xfirst" d="M16.7818 14.9699C19.6894 18.459 23.1197 21.4668 26.7321 24.2082C31.9375 28.1584 38.1767 31.2614 42.5172 36.2423C44.7232 38.7739 46.4974 41.7422 48.4214 44.4909C51.5873 49.0135 54.9428 53.4707 58.6669 57.5496C62.946 62.2362 66.5032 67.5044 70.9963 71.9975C72.1422 73.1434 73.3013 74.2776 74.4346 75.4358C76.0402 77.0767 77.442 79.6866 79.2969 80.9233" stroke="#061161" stroke-width="8" stroke-linecap="round"/>
  <path class="Xsecond" d="M74.6083 18.4082C72.5131 21.1481 70.754 24.1971 68.7041 26.9866C63.4097 34.1914 57.1882 40.5833 50.9046 46.922C46.9789 50.8822 42.6103 54.3532 38.7316 58.3657C36.4629 60.7126 34.3665 63.2583 32.2543 65.746C28.7913 69.8246 25.6238 74.0185 22.4776 78.3532C21.8671 79.1943 20.8219 81.4039 19.9076 81.861" stroke="#061161" stroke-width="8" stroke-linecap="round"/>
  </svg>
  `
    : `
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="white"/>
  <path class="Opath" d="M49.9148 18.4082C48.636 17.2573 47.3491 18.0008 45.9555 18.4082C41.921 19.5875 38.053 21.1154 34.2166 22.8537C32.3343 23.7066 30.7659 25.4403 29.3022 26.8477C27.6759 28.4115 25.9634 29.8001 24.2836 31.2932C21.5596 33.7146 18.0161 37.3261 16.4693 40.6705C14.4352 45.0684 14.5586 50.2919 14.5938 55.049C14.6124 57.5645 14.9898 59.6585 15.8267 62.0125C16.3652 63.527 16.4924 65.1853 17.407 66.5448C19.9305 70.296 24.8325 72.3518 28.9375 73.6646C35.943 75.9049 43.3252 77.5127 50.6789 77.728C54.8886 77.8513 58.5462 77.5105 62.3484 75.6095C65.0941 74.2366 67.6853 72.3439 70.0238 70.3652C74.2375 66.7998 76.6741 62.0505 78.3592 56.855C79.9846 51.8432 79.6095 45.1921 77.9771 40.219C76.3978 35.4074 74.7759 31.4415 71.1699 27.7854C65.9489 22.4919 58.7901 19.5468 51.7903 17.2968C50.3867 16.8457 48.4994 16.5851 47.0322 16.5327C45.4267 16.4754 44.5627 17.4386 43.3507 18.4082" stroke="#780206" stroke-width="8" stroke-linecap="round"/>
  </svg>
  `;
  boxes[nthBox].classList.add("selected");
};

export const removeHovers = () => {
  let boxes = [...document.getElementsByClassName("gameBoxItem")];
  boxes.forEach((element) => {
    if (!element.classList.contains("selected")) {
      element.classList.add("selected");
    }
  });
};
export const findAllElementsIndex = (arr, element) => {
  const indices = [];
  let idx = arr.indexOf(element);
  while (idx !== -1) {
    indices.push(idx);
    idx = arr.indexOf(element, idx + 1);
  }
  return indices;
};
