import React from 'react';

export const LanSingleQuoteRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M56 416c-4.4 0-8-3.6-8-8s3.6-8 8-8h16c57.4 0 104-46.6 104-104v-34.7c-13.2 16.3-33.4 26.7-56 26.7H72c-39.8 0-72-32.2-72-72v-48c0-39.8 32.2-72 72-72h48c39.8 0 72 32.2 72 72v128c0 66.3-53.7 120-120 120zm64-144c30.9 0 56-25.1 56-56v-48c0-30.9-25.1-56-56-56H72c-30.9 0-56 25.1-56 56v48c0 30.9 25.1 56 56 56z"})
);

export default LanSingleQuoteRightThin;
