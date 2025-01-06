const iconSearch = `
  <svg
    focusable="false"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    xmlns="http://www.w3.org/2000/svg"
    class="header__icon header__icon-search"
    >
      <path
        d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"
      ></path>
      <path d="M0,0h24v24H0V0z" fill="none"></path>
  </svg>
`;

const iconMenu = `
  <svg focusable="false" viewBox="0 0 24 24" class="header__icon header__icon-menu">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
  </svg>
`;

const iconRender = `
  <svg
    id="glyph"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    class="header__icon header__icon-rerender"
  >
    <path
    d="m14.63 26a10 10 0 1 1 10-10s0 .27 0 .45v.21a1 1 0 0 1 -1 1 1 1 0 0 1 -1-1v-.63a8 8 0 1 0 -2.82 6.11 1 1 0 0 1 1.41.11 1 1 0 0 1 -.12 1.41 10 10 0 0 1 -6.47 2.34z"
    />
    <path
    d="m23.6 17.64a1 1 0 0 1 -.58-.19l-3.15-2.27a1 1 0 0 1 1.13-1.63l2.42 1.75 2.16-2.45a1 1 0 1 1 1.5 1.33l-2.73 3.12a1 1 0 0 1 -.75.34z"
    />
  </svg>
`;

const iconDisplayFormat = `
  <svg
          id="Layer_1"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          class="header__icon header__icon-display-format"
        >
          <g>
            <g>
              <path
                d="m53 29h-42c-1.654 0-3-1.346-3-3v-8c0-1.654 1.346-3 3-3h42c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3zm-41-4h40v-6h-40z"
              />
            </g>

            <g>
              <path
                d="m53 49h-42c-1.654 0-3-1.346-3-3v-8c0-1.654 1.346-3 3-3h42c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3zm-41-4h40v-6h-40z"
              />
            </g>
          </g>
  </svg>
`;

const iconSettings = `
  <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 478.703 478.703"
          style="enable-background: new 0 0 478.703 478.703"
          xml:space="preserve"
          class="header__icon header__icon-settings"
        >
          <g>
            <g>
              <path
                d="M454.2,189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8,7.1-27.9-3.2-38.1l-29.8-29.8 c-5.6-5.6-13-8.7-20.9-8.7c-6.2,0-12.1,1.9-17.1,5.5l-27.8,19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2 c-2.4-14.3-14.7-24.7-29.2-24.7h-42.1c-14.5,0-26.8,10.4-29.2,24.7l-5.8,34c-11.2,3.5-22.1,8.1-32.5,13.7l-27.5-19.8 c-5-3.6-11-5.5-17.2-5.5c-7.9,0-15.4,3.1-20.9,8.7l-29.9,29.8c-10.2,10.2-11.6,26.3-3.2,38.1l20,28.1 c-5.5,10.5-9.9,21.4-13.3,32.7l-33.2,5.6c-14.3,2.4-24.7,14.7-24.7,29.2v42.1c0,14.5,10.4,26.8,24.7,29.2l34,5.8 c3.5,11.2,8.1,22.1,13.7,32.5l-19.7,27.4c-8.4,11.8-7.1,27.9,3.2,38.1l29.8,29.8c5.6,5.6,13,8.7,20.9,8.7c6.2,0,12.1-1.9,17.1-5.5 l28.1-20c10.1,5.3,20.7,9.6,31.6,13l5.6,33.6c2.4,14.3,14.7,24.7,29.2,24.7h42.2c14.5,0,26.8-10.4,29.2-24.7l5.7-33.6 c11.3-3.5,22.2-8,32.6-13.5l27.7,19.8c5,3.6,11,5.5,17.2,5.5l0,0c7.9,0,15.3-3.1,20.9-8.7l29.8-29.8c10.2-10.2,11.6-26.3,3.2-38.1 l-19.8-27.8c5.5-10.5,10.1-21.4,13.5-32.6l33.6-5.6c14.3-2.4,24.7-14.7,24.7-29.2v-42.1 C478.9,203.801,468.5,191.501,454.2,189.101z M451.9,260.401c0,1.3-0.9,2.4-2.2,2.6l-42,7c-5.3,0.9-9.5,4.8-10.8,9.9 c-3.8,14.7-9.6,28.8-17.4,41.9c-2.7,4.6-2.5,10.3,0.6,14.7l24.7,34.8c0.7,1,0.6,2.5-0.3,3.4l-29.8,29.8c-0.7,0.7-1.4,0.8-1.9,0.8 c-0.6,0-1.1-0.2-1.5-0.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-0.6c-13.1,7.8-27.2,13.6-41.9,17.4c-5.2,1.3-9.1,5.6-9.9,10.8l-7.1,42 c-0.2,1.3-1.3,2.2-2.6,2.2h-42.1c-1.3,0-2.4-0.9-2.6-2.2l-7-42c-0.9-5.3-4.8-9.5-9.9-10.8c-14.3-3.7-28.1-9.4-41-16.8 c-2.1-1.2-4.5-1.8-6.8-1.8c-2.7,0-5.5,0.8-7.8,2.5l-35,24.9c-0.5,0.3-1,0.5-1.5,0.5c-0.4,0-1.2-0.1-1.9-0.8l-29.8-29.8 c-0.9-0.9-1-2.3-0.3-3.4l24.6-34.5c3.1-4.4,3.3-10.2,0.6-14.8c-7.8-13-13.8-27.1-17.6-41.8c-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2 c-1.3-0.2-2.2-1.3-2.2-2.6v-42.1c0-1.3,0.9-2.4,2.2-2.6l41.7-7c5.3-0.9,9.6-4.8,10.9-10c3.7-14.7,9.4-28.9,17.1-42 c2.7-4.6,2.4-10.3-0.7-14.6l-24.9-35c-0.7-1-0.6-2.5,0.3-3.4l29.8-29.8c0.7-0.7,1.4-0.8,1.9-0.8c0.6,0,1.1,0.2,1.5,0.5l34.5,24.6 c4.4,3.1,10.2,3.3,14.8,0.6c13-7.8,27.1-13.8,41.8-17.6c5.1-1.4,9-5.6,9.9-10.8l7.2-42.3c0.2-1.3,1.3-2.2,2.6-2.2h42.1 c1.3,0,2.4,0.9,2.6,2.2l7,41.7c0.9,5.3,4.8,9.6,10,10.9c15.1,3.8,29.5,9.7,42.9,17.6c4.6,2.7,10.3,2.5,14.7-0.6l34.5-24.8 c0.5-0.3,1-0.5,1.5-0.5c0.4,0,1.2,0.1,1.9,0.8l29.8,29.8c0.9,0.9,1,2.3,0.3,3.4l-24.7,34.7c-3.1,4.3-3.3,10.1-0.6,14.7 c7.8,13.1,13.6,27.2,17.4,41.9c1.3,5.2,5.6,9.1,10.8,9.9l42,7.1c1.3,0.2,2.2,1.3,2.2,2.6v42.1H451.9z"
              />
              <path
                d="M239.4,136.001c-57,0-103.3,46.3-103.3,103.3s46.3,103.3,103.3,103.3s103.3-46.3,103.3-103.3S296.4,136.001,239.4,136.001 z M239.4,315.601c-42.1,0-76.3-34.2-76.3-76.3s34.2-76.3,76.3-76.3s76.3,34.2,76.3,76.3S281.5,315.601,239.4,315.601z"
              />
            </g>
          </g>
        </svg>
`;

const iconGoggleApps = ` 
  <svg
          id="Icon"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          class="header__icon"
        >
          <circle cx="32" cy="32" r="8" />
          <circle cx="11" cy="32" r="8" />
          <circle cx="53" cy="32" r="8" />
          <circle cx="32" cy="53" r="8" />
          <circle cx="11" cy="53" r="8" />
          <circle cx="53" cy="53" r="8" />
          <circle cx="32" cy="11" r="8" />
          <circle cx="11" cy="11" r="8" />
          <circle cx="53" cy="11" r="8" />
        </svg>
`;

const iconMenuArea = document.querySelector(".header__icon-menu-area");
const iconSearchArea = document.querySelector(".header__icon-search-area");
const iconRerenderArea = document.querySelector(".header__icon-rerender-area");
const iconDisplayFormatArea = document.querySelector(
  ".header__icon-display-format-area"
);
const iconSettingsArea = document.querySelector(".header__icon-settings-area");
const iconGoggleAppsArea = document.querySelector(
  ".header__icon-google-apps-area"
);

iconMenuArea.innerHTML = iconMenu;
iconSearchArea.innerHTML = iconSearch;
iconRerenderArea.innerHTML = iconRender;
iconDisplayFormatArea.innerHTML = iconDisplayFormat;
iconSettingsArea.innerHTML = iconSettings;
iconGoggleAppsArea.innerHTML = iconGoggleApps;
