import React from 'react';

export const LanRedoAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M497.4 1.8c-9-3.7-19.3-1.7-26.2 5.2l-51.8 51.8C318.8-24.7 169.3-19.3 75.1 75c-100 100-100 262 0 362s262.1 100 362 0c14.9-14.9 27.6-31.2 38.1-48.5 6.9-11.3 3.2-26.1-8.1-33s-26.1-3.2-33 8.1c-8.5 14-18.8 27.3-31 39.4-81.2 81.2-212.9 81.2-294.2 0s-81.2-212.9 0-294.2c75.5-75.5 194.6-80.8 276.2-16l-50 50.2c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8h136.1c13.3 0 24-10.7 24-24V24c0-9.7-5.8-18.5-14.8-22.2m-33.2 80.1V136h-54.1z"})
);

export default LanRedoAltRegular;
