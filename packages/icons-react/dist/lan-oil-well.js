import React from 'react';

export const LanOilWell = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M538.8 224.1c6.9 25.6-8.3 51.9-33.9 58.8l-15.5 4.1-66.3-247.3 15.5-4.1c25.6-6.9 51.9 8.3 58.8 33.9L538.8 224zM528.3 61.3c-11.4-42.7-55.3-68-98-56.6l-15.4 4.1C397.8 13.4 387.7 31 392.3 48l28.6 106.9-120.4 31.2-13.4-39.3c-2.2-6.5-8.3-10.8-15.1-10.8s-12.9 4.4-15.1 10.8l-19 55.6L96 239.2V176c0-8.8-7.2-16-16-16s-16 7.2-16 16v304H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h544c8.8 0 16-7.2 16-16s-7.2-16-16-16H400.9l-1.8-5.2-70.3-205.9-31.1 8.1 28.3 83H217.8l23.3-68.4-37.1 9.6-59.3 173.6-1.8 5.2H95.8V272.2L429 185.8l29.3 109.5c4.6 17.1 22.1 27.2 39.2 22.6l15.5-4.1c42.7-11.4 68-55.3 56.6-98zM337 392l30 88H176.8l30-88h130.1z"})
);

export default LanOilWell;
