import React from 'react';

export const LanApostropheThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 352c61.9 0 112-50.1 112-112V104c0-39.8-32.2-72-72-72H72C32.2 32 0 64.2 0 104v48c0 39.8 32.2 72 72 72h48c22.6 0 42.8-10.4 56-26.7V240c0 53-43 96-96 96h-8c-4.4 0-8 3.6-8 8s3.6 8 8 8zm96-200c0 30.9-25.1 56-56 56H72c-30.9 0-56-25.1-56-56v-48c0-30.9 25.1-56 56-56h48c30.9 0 56 25.1 56 56z"})
);

export default LanApostropheThin;
