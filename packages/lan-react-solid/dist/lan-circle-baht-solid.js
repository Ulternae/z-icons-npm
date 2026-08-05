import React from 'react';

export function LanCircleBahtSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-16-400c0-8.8 7.2-16 16-16s16 7.2 16 16v16h4c42 0 76 34 76 76 0 16.2-5.1 31.3-13.8 43.7 18.1 13.9 29.8 35.8 29.8 60.3 0 42-34 76-76 76h-20v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16h-43.4c-15.8 0-28.6-12.8-28.6-28.6V154.3c0-14.5 11.8-26.3 26.3-26.3H240zm-24 64v56h24v-56zm56 0v56h4c15.5 0 28-12.5 28-28s-12.5-28-28-28zm-56 104v56h24v-56zm56 0v56h20c15.5 0 28-12.5 28-28s-12.5-28-28-28z"})
  );
}

export default LanCircleBahtSolid;
