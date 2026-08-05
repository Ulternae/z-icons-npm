import React from 'react';

export function LanPlaneUpRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 512 576.086',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256-32c-44.2 0-80 35.8-80 80v100.1L7.8 302.3c-5 4.5-7.8 11-7.8 17.7v72c0 7.7 3.7 15 10 19.5s14.3 5.7 21.6 3.3L176 366.7v39.4l-57 57c-4.5 4.5-7 10.6-7 17v40c0 7.5 3.5 14.5 9.4 19s13.6 6.1 20.8 4.2L256 512.8l113.8 30.4c7.2 1.9 14.9.4 20.8-4.2s9.4-11.6 9.4-19v-40c0-6.4-2.5-12.5-7-17l-57-57v-39.4l144.4 48.1c7.3 2.4 15.4 1.2 21.6-3.3s10-11.8 10-19.5v-80c0-6.9-3-13.5-8.2-18.1L336 147.1V48c0-44.2-35.8-80-80-80m-32 80c0-17.7 14.3-32 32-32s32 14.3 32 32v110c0 .7 0 1.3.1 2h-.1v256c0 6.4 2.5 12.5 7 17l55.4 55.4-88.2-23.5c-4.1-1.1-8.3-1.1-12.4 0l-88.2 23.4L217 433c4.5-4.5 7-10.6 7-17zm-48 165.2V316L48 358.7v-28.1l128-117.3zM336 316V210.9l128 112v35.8z"})
  );
}

export default LanPlaneUpRegular;
