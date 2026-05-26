import React from 'react';

export const LanArrowDownToArcRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 464c-114.9 0-208-93.1-208-208 0-13.3-10.7-24-24-24S0 242.7 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 114.9-93.1 208-208 208M135 241l104 104c9.4 9.4 24.6 9.4 33.9 0L377 241c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-63 63V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v246.1l-63-63c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"})
);

export default LanArrowDownToArcRegular;
