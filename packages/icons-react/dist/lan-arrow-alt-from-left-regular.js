import React from 'react';

export const LanArrowAltFromLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112v64H176c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h144v64c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2zm-249 15h-80v-64h168c13.3 0 24-10.7 24-24v-30.1l86.1 86.1-86.1 86.1V312c0-13.3-10.7-24-24-24zM24 64C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-13.3-10.7-24-24-24"})
);

export default LanArrowAltFromLeftRegular;
