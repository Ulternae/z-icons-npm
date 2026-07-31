import React from 'react';

export const LanEnvelopeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M61.4 64C27.5 64 0 91.5 0 125.4c0 .9 0 1.7.1 2.6H0v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128h-.1c0-.9.1-1.7.1-2.6 0-33.9-27.5-61.4-61.4-61.4zM464 192.3V384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192.3l154.8 117.4c31.4 23.9 74.9 23.9 106.4 0zM48 125.4c0-7.4 6-13.4 13.4-13.4h389.2c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7"})
);

export default LanEnvelopeRegular;
