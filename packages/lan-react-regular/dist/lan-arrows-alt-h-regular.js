import React from 'react';

export function LanArrowsAltHRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M135 0c22.6 0 41 18.3 41 41v63h312c13.3 0 24 10.7 24 24s-10.7 24-24 24H176v63c0 22.6-18.3 41-41 41-10.9 0-21.3-4.3-29-12L7 145c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l99-99c7.7-7.7 18.1-12 29-12m-7 57.9L57.9 128l70.1 70.1zM336 297c0-22.6 18.3-41 41-41 10.9 0 21.3 4.3 29 12l99 99c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-99 99c-7.7 7.7-18.1 12-29 12-22.6 0-41-18.3-41-41v-63H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h312zm118.1 87L384 313.9V454l70.1-70.1z"})
  );
}

export default LanArrowsAltHRegular;
