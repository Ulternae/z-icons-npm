import React from 'react';

export function LanTicketsSimpleThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 32c-35.3 0-64 28.7-64 64v56.6c0 4 2.9 7.4 6.9 7.9 23.3 3.3 41.1 23.3 41.1 47.5s-17.9 44.2-41.1 47.5c-3.9.6-6.9 3.9-6.9 7.9V320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-56.6c0-4-2.9-7.4-6.9-7.9-23.3-3.3-41.1-23.3-41.1-47.5s17.9-44.2 41.1-47.5c3.9-.6 6.9-3.9 6.9-7.9V96c0-35.3-28.7-64-64-64zm-48 64c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48v50c-27.6 7.1-48 32.2-48 62s20.4 54.9 48 62v50c0 26.5-21.5 48-48 48H160c-26.5 0-48-21.5-48-48v-50c27.6-7.1 48-32.2 48-62s-20.4-54.9-48-62zm-96 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v296c0 26.5 21.5 48 48 48h456c4.4 0 8-3.6 8-8s-3.6-8-8-8H48c-17.7 0-32-14.3-32-32z"})
  );
}

export default LanTicketsSimpleThin;
