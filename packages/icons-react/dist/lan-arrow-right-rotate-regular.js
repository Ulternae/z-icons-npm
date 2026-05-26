import React from 'react';

export const LanArrowRightRotateRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M488.2 0c-13.3 0-24 10.7-24 24v78.1L437.1 75C337.1-25 175-25 75.1 75s-100 262.1 0 362 262.1 100 362 0c14.9-14.9 27.6-31.2 38.1-48.5 6.9-11.3 3.2-26.1-8.1-33s-26.1-3.2-33 8.1c-8.5 14-18.8 27.3-31 39.4-81.2 81.2-212.9 81.2-294.2 0s-81.2-212.9 0-294.2 212.9-81.2 294.2 0l27.1 27.1H352c-13.3 0-24 10.7-24 24s10.7 24 24 24h136.1c13.3 0 24-10.7 24-24v-136c0-13.3-10.7-24-24-24z"})
);

export default LanArrowRightRotateRegular;
