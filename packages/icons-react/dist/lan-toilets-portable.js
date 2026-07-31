import React from 'react';

export const LanToiletsPortable = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 32h96c17.7 0 32 14.3 32 32v32H64V64c0-17.7 14.3-32 32-32M32 96v400c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h160v16c0 8.8 7.2 16 16 16s16-7.2 16-16V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64zm192 32v80h-24c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h24v112H64V128zm0 112v64h-24c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8zM384 32h104c17.7 0 32 14.3 32 32v32H352V64c0-17.7 14.3-32 32-32m-32 416V128h168v80h-24c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h24v112zm200-240V64c0-35.3-28.7-64-64-64H384c-35.3 0-64 28.7-64 64v432c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h168v16c0 8.8 7.2 16 16 16s16-7.2 16-16zm-32 32v64h-24c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8z"})
);

export default LanToiletsPortable;
