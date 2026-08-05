import React from 'react';

export function LanSoapThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 512 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M176 16a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-46.9 144H96c-53 0-96 43-96 96v128c0 53 43 96 96 96h320c53 0 96-43 96-96V256c0-48-35.3-87.8-81.3-94.9q-1.2 8.1-3.6 15.6c38.9 5.4 68.9 38.8 68.9 79.2v128c0 44.2-35.8 80-80 80L96 464c-44.2 0-80-35.8-80-80V256c0-44.2 35.8-80 80-80h116.6c-1.5-5.2-2.7-10.5-3.5-16M416 320c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64s28.7-64 64-64h192c35.3 0 64 28.7 64 64m-256-80c-44.2 0-80 35.8-80 80s35.8 80 80 80h192c44.2 0 80-35.8 80-80s-35.8-80-80-80zM384-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64M272 144a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"})
  );
}

export default LanSoapThin;
