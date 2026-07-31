import React from 'react';

export const LanPhoneOfficeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80h384c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H208v48h240c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H64c-5.5 0-10.9.7-16 2V96c0-8.8 7.2-16 16-16M48 208v-16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zm192-80c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h144c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm16 248a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m104-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-184-56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m104-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanPhoneOfficeRegular;
