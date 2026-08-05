import React from 'react';

export function LanBusSideRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M488.2.2C572.8 4.5 640 74.4 640 160v224l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-5.6c-13.2 37.3-48.6 64-90.4 64s-77.3-26.7-90.4-64H250.6c-13.2 37.3-48.7 64-90.4 64s-77.2-26.7-90.4-64h-5.6l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 384V96C0 44.6 40.3 2.7 91.1.1L96 0h384zM160 368a48 48 0 1 0 0 96 48 48 0 1 0 0-96m320 0a48 48 0 1 0 0 96 48 48 0 1 0 0-96M48 224v160c0 8.8 7.2 16 16 16h1.3c7.6-45.4 47.1-80 94.7-80s87 34.6 94.7 80h130.7c4.8-28.7 22.4-53 46.7-67.1V224h-384zm432 96c47.6 0 87 34.6 94.7 80h1.3c8.8 0 16-7.2 16-16V160c0-59.9-47.1-108.9-106.2-111.8L480 48zM96 48c-26.5 0-48 21.5-48 48v80h168V48zm168 128h168V48H264z"})
  );
}

export default LanBusSideRegular;
