import React from 'react';

export const LanVoicemail = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144 352a112 112 0 1 0 0-224 112 112 0 1 0 0 224m144-112c0 45.2-20.9 85.6-53.5 112h171c-32.6-26.4-53.5-66.8-53.5-112 0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144H144C64.5 384 0 319.5 0 240S64.5 96 144 96s144 64.5 144 144m208 112a112 112 0 1 0 0-224 112 112 0 1 0 0 224"})
);

export default LanVoicemail;
