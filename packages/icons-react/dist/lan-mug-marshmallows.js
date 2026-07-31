import React from 'react';

export const LanMugMarshmallows = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 32c-8.8 0-16 7.2-16 16v32h-32c0-8.8-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16H96c0-26.5 21.5-48 48-48h80c6.2 0 12.2 1.2 17.7 3.4C247.2 15 265.9 0 288 0h80c26.5 0 48 21.5 48 48v32h-32V48c0-8.8-7.2-16-16-16zM96 384c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V160H192v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V160H96zm352-224v160h16c44.2 0 80-35.8 80-80s-35.8-80-80-80zm0 192v32c0 53-43 96-96 96H160c-53 0-96-43-96-96V160c0-17.7 14.3-32 32-32h368c61.9 0 112 50.1 112 112s-50.1 112-112 112z"})
);

export default LanMugMarshmallows;
