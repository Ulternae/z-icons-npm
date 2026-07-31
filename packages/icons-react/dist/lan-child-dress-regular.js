import React from 'react';

export const LanChildDressRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M184 72a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-96 0a72 72 0 1 1 144 0 72 72 0 1 1-144 0m189.5 239.3-43.6-52.6 36.8 109.6c2.5 7.3 1.2 15.4-3.3 21.7s-11.8 10-19.5 10h-24v88c0 13.3-10.7 24-24 24s-24-10.7-24-24v-88h-32v88c0 13.3-10.7 24-24 24s-24-10.7-24-24v-88h-24c-7.7 0-15-3.7-19.5-10s-5.7-14.3-3.3-21.7l36.8-109.6-43.6 52.6c-8.5 10.2-23.6 11.6-33.8 3.1s-11.6-23.6-3.1-33.8l65.4-78.8c22-26.5 54.6-41.8 89.1-41.8s67.1 15.3 89.1 41.8l65.4 78.8c8.5 10.2 7.1 25.3-3.1 33.8s-25.3 7.1-33.8-3.1M159 209.6c-3.4 0-6.5 2.2-7.6 5.5l-46 136.9h109.2l-46-136.9c-1.1-3.3-4.1-5.5-7.6-5.5z"})
);

export default LanChildDressRegular;
