import React from 'react';

export function LanBriefcaseThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M176 40v56h160V40c0-13.3-10.7-24-24-24H200c-13.3 0-24 10.7-24 24m-16 56V40c0-22.1 17.9-40 40-40h112c22.1 0 40 17.9 40 40v56h96c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM16 272v144c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V272H320v32c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-32zm176-16h304v-96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v96zm16 16v32c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-32z"})
  );
}

export default LanBriefcaseThin;
