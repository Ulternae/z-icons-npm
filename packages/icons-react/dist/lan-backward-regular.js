import React from 'react';

export const LanBackwardRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M51.6 256 224 90.7v330.6zM247.7 35.2c-14.7-6.3-31.8-3.2-43.4 7.9l-192 184C4.5 234.7 0 245.1 0 256s4.5 21.3 12.3 28.9l192 184c11.6 11.1 28.6 14.2 43.4 7.9S272 456 272 440V303.7l172.3 165.1c11.6 11.1 28.6 14.2 43.4 7.9S512 456 512 440V72c0-16-9.6-30.5-24.3-36.8s-31.8-3.2-43.4 7.9L272 208.3V72c0-16-9.6-30.5-24.3-36.8M464 421.3 291.6 256 464 90.7z"})
);

export default LanBackwardRegular;
