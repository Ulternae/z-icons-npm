import React from 'react';

export const LanBeerMugEmptyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M400 80v304c0 26.5-21.5 48-48 48H160c-26.5 0-48-21.5-48-48V80zm48 304v-17.2l97-48.5c19-9.5 31-28.9 31-50.1V152c0-30.9-25.1-56-56-56h-72V80c0-26.5-21.5-48-48-48H112c-26.5 0-48 21.5-48 48v304c0 53 43 96 96 96h192c53 0 96-43 96-96m75.6-108.6L448 313.2V144h72c4.4 0 8 3.6 8 8v116.2c0 3-1.7 5.8-4.4 7.2M180 128c-11 0-20 9-20 20v216c0 11 9 20 20 20s20-9 20-20V148c0-11-9-20-20-20m76 0c-11 0-20 9-20 20v216c0 11 9 20 20 20s20-9 20-20V148c0-11-9-20-20-20m96 20c0-11-9-20-20-20s-20 9-20 20v216c0 11 9 20 20 20s20-9 20-20z"})
);

export default LanBeerMugEmptyRegular;
