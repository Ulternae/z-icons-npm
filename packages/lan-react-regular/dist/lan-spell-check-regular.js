import React from 'react';

export function LanSpellCheckRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M120 32c-48.6 0-88 39.4-88 88v176c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h96v72c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-48.6-39.4-88-88-88zm56 144H80v-56c0-22.1 17.9-40 40-40h16c22.1 0 40 17.9 40 40zM296 32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h84c46.4 0 84-37.6 84-84 0-27.8-13.5-52.4-34.3-67.7C441.1 154 448 135.8 448 116c0-46.4-37.6-84-84-84zm68 120h-44V80h44c19.9 0 36 16.1 36 36s-16.1 36-36 36m-44 120v-72h60c19.9 0 36 16.1 36 36s-16.1 36-36 36zm251 54.7c8.1-10.5 6.2-25.6-4.3-33.7s-25.6-6.2-33.7 4.3L414.6 450.5l-52.8-58.6c-8.9-9.9-24-10.7-33.9-1.8s-10.7 24-1.8 33.9l72 80c4.8 5.3 11.6 8.2 18.7 7.9s13.7-3.7 18.1-9.3l136-176z"})
  );
}

export default LanSpellCheckRegular;
