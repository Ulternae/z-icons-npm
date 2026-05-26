import React from 'react';

export const LanTasksAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 48v160h112c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zm-139.3 0H48c-17.7 0-32 14.3-32 32v96c0 1.5.1 3 .3 4.4zm22.6 0L23.2 196.2C29 203.4 38 208 48 208h76.7L272 60.7V48zM272 83.3 147.3 208H272zM0 80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm400 224H160v160h240c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32m-352 0c-17.7 0-32 14.3-32 32v96c0 1.5.1 3 .3 4.4L144 308.7V304zM23.2 452.2C29 459.4 38 464 48 464h96V331.3L23.2 452.1zM48 288h352c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48"})
);

export default LanTasksAltThin;
