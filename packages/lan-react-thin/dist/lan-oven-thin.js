import React from 'react';

export function LanOvenThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M352 16H96c-44.2 0-80 35.8-80 80v96h416V96c0-44.2-35.8-80-80-80m80 192H16v240c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48zM0 200V96C0 43 43 0 96 0h256c53 0 96 43 96 96v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64-88a16 16 0 1 1 32 0 16 16 0 1 1-32 0m112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m80 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32M96 280c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8"})
  );
}

export default LanOvenThin;
