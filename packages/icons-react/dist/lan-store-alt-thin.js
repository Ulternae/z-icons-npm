import React from 'react';

export const LanStoreAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M92.6 74.5c8.2-16.2 24.8-26.5 43-26.5h304.9c18.2 0 34.8 10.3 42.9 26.5l56.8 113.7c2.5 5 3.8 10.4 3.8 16 0 19.8-16 35.8-35.8 35.8H67.8C48 240 32 224 32 204.2c0-5.6 1.3-11 3.8-16zM16 204.2c0 27.3 21.2 49.7 48 51.6V432c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V256h144v216c0 4.4 3.6 8 8 8s8-3.6 8-8V255.9c26.8-1.9 48-24.3 48-51.6 0-8-1.9-16-5.5-23.2L497.7 67.4c-10.9-21.7-33-35.4-57.3-35.4H135.6c-24.2 0-46.4 13.7-57.2 35.4L21.5 181.1c-3.6 7.2-5.5 15.1-5.5 23.2zM80 368V256h256v112zm0 16h256v48c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32z"})
);

export default LanStoreAltThin;
