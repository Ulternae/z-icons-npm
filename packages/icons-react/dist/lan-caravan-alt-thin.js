import React from 'react';

export const LanCaravanAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 48c61.9 0 112 50.1 112 112v240H308.7c-10.4-36.9-44.4-64-84.7-64s-74.2 27.1-84.7 64H96c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM96 416h40.4c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8H632c4.4 0 8-3.6 8-8s-3.6-8-8-8h-88V160c0-70.7-57.3-128-128-128H96c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64m72-272h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24m-40 24v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40h-48c-22.1 0-40 17.9-40 40m280-24c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24zm-48-16c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40zM224 352a72 72 0 1 1 0 144 72 72 0 1 1 0-144"})
);

export default LanCaravanAltThin;
