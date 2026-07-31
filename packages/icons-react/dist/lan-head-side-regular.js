import React from 'react';

export const LanHeadSideRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 0C100.3 0 0 100.3 0 224c0 57.8 22 110.6 58 150.3 4.2 4.7 6 9.7 6 13.8V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-99.9c0-18.1-7.8-34.2-18.5-46C65.2 310.9 48 269.5 48 224c0-97.2 78.8-176 176-176 86.6 0 158.7 62.6 173.3 145.1.9 4.8 3.2 9.3 6.7 12.8l52.2 52.2c5 5 7.9 11.9 7.9 19 0 14.9-12 26.9-26.9 26.9H424c-13.3 0-24 10.7-24 24v48c0 22.1-17.9 40-40 40h-48c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-24h24c48.6 0 88-39.4 88-88v-24.8c36.2-5.3 64-36.5 64-74.1 0-19.9-7.9-38.9-21.9-53l-47-47C421.5 75.9 331.7 0 224 0m96 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanHeadSideRegular;
