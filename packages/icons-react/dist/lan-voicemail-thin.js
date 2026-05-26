import React from 'react';

export const LanVoicemailThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M144 368a128 128 0 1 0 0-256 128 128 0 1 0 0 256m144-128c0 55.7-31.7 104.1-78 128h220c-46.3-23.9-78-72.3-78-128 0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144H144C64.5 384 0 319.5 0 240S64.5 96 144 96s144 64.5 144 144m208 128a128 128 0 1 0 0-256 128 128 0 1 0 0 256m-352-64a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-144a80 80 0 1 1 0 160 80 80 0 1 1 0-160m416 80a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-144 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"})
);

export default LanVoicemailThin;
