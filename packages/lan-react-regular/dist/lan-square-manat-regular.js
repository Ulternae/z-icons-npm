import React from 'react';

export function LanSquareManatRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm208 40c0-8.8 7.2-16 16-16s16 7.2 16 16v9.1c58.7 7.8 104 58.1 104 118.9v96c0 13.3-10.7 24-24 24s-24-10.7-24-24v-96c0-34.3-23.9-62.9-56-70.2V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V193.8c-32.1 7.3-56 36-56 70.2v96c0 13.3-10.7 24-24 24s-24-10.7-24-24v-96c0-60.8 45.3-111.1 104-118.9z"})
  );
}

export default LanSquareManatRegular;
