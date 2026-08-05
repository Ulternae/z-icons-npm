import React from 'react';

export function LanBagsShoppingRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M176 64v32h96V64c0-26.5-21.5-48-48-48s-48 21.5-48 48m-48 32V64c0-53 43-96 96-96s96 43 96 96v32h64c35.3 0 64 28.7 64 64v16h-48v-16c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h80v48H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm128 128h256c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V288c0-35.3 28.7-64 64-64m80 88c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 53 43 96 96 96s96-43 96-96v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 26.5-21.5 48-48 48s-48-21.5-48-48z"})
  );
}

export default LanBagsShoppingRegular;
