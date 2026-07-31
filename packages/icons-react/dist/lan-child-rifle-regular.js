import React from 'react';

export const LanChildRifleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 64a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-64 144c5.5 0 10.9.9 16 2.6V336h-32V210.6a50.6 50.6 0 0 1 16-2.6m-16 280V384h32v104c0 13.3 10.7 24 24 24s24-10.7 24-24V264.8l27.7 44c7.1 11.2 21.9 14.6 33.1 7.5s14.6-21.9 7.5-33.1l-48.4-76.9C209.8 177.5 178.1 160 144 160s-65.8 17.5-83.9 46.3l-48.4 76.9c-7.1 11.2-3.7 26 7.5 33.1s26 3.7 33.1-7.5l27.7-44V488c0 13.3 10.7 24 24 24s24-10.7 24-24M384 0c-8.8 0-16 7.2-16 16s7.2 16 16 16v100.3c-9.6 5.5-16 15.9-16 27.7v32h-16c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h32v112c0 8.8 7.2 16 16 16h59.5c10.4 0 18-9.8 15.5-19.9L452 400h44c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-48v-26.7l53.1-17.7c6.5-2.2 10.9-8.3 10.9-15.2v-84.5c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v56l-16 5.3V159.9c0-11.8-6.4-22.2-16-27.7V16c0-8.8-7.2-16-16-16zm16 336h-32v-96h32z"})
);

export default LanChildRifleRegular;
