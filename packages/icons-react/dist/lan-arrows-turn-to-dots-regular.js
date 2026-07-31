import React from 'react';

export const LanArrowsTurnToDotsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16.05 448 528.05',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M271-9c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47H352c53 0 96 43 96 96v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32c0-26.5-21.5-48-48-48h-94.1l47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-88-88c-9.4-9.4-9.4-24.6 0-33.9zm-94 272 88 88c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47H96c-26.5 0-48 21.5-48 48v32c0 13.3-10.7 24-24 24S0 485.3 0 472v-32c0-53 43-96 96-96h94.1l-47-47c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zm143 105a64 64 0 1 1 128 0 64 64 0 1 1-128 0M64 160a64 64 0 1 1 0-128 64 64 0 1 1 0 128"})
);

export default LanArrowsTurnToDotsRegular;
