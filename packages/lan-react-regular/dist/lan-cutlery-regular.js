import React from 'react';

export function LanCutleryRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M71.9 26.7c1.5-13.2-8-25-21.2-26.5s-25 8-26.5 21.2l-16 144-.1 1.3V184c0 48.6 39.4 88 88 88h8v216c0 13.3 10.7 24 24 24s24-10.7 24-24V272h8c48.6 0 88-39.4 88-88v-17.3l-.1-1.3-16-144C230.4 8.2 218.5-1.3 205.3.1s-22.7 13.3-21.2 26.5L200 169.3V184c0 22.1-17.9 40-40 40H96c-22.1 0-40-17.9-40-40v-14.7L71.9 26.6zM152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24zm184 152c0-57.7 21.7-88.6 41.4-105.7 7.7-6.6 15.5-11.6 22.6-15.2V304h-48c-8.8 0-16-7.2-16-16zm64 176v136c0 13.3 10.7 24 24 24s24-10.7 24-24V32c0-17.7-14.3-32-32-32-16 0-128 32-128 176v112c0 35.3 28.7 64 64 64z"})
  );
}

export default LanCutleryRegular;
