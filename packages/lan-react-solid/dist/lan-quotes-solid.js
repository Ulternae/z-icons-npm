import React from 'react';

export function LanQuotesSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M88 0C39.4 0 0 39.4 0 88v104c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48v-48c0-26.5-21.5-48-48-48H64v-8c0-13.3 10.7-24 24-24h8c17.7 0 32-14.3 32-32S113.7 0 96 0zm176 0c-48.6 0-88 39.4-88 88v104c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48v-48c0-26.5-21.5-48-48-48h-32v-8c0-13.3 10.7-24 24-24h8c17.7 0 32-14.3 32-32S289.7 0 272 0zm312 424V320c0-26.5-21.5-48-48-48h-48c-26.5 0-48 21.5-48 48v48c0 26.5 21.5 48 48 48h32v8c0 13.3-10.7 24-24 24h-8c-17.7 0-32 14.3-32 32s14.3 32 32 32h8c48.6 0 88-39.4 88-88m-264 88c48.6 0 88-39.4 88-88V320c0-26.5-21.5-48-48-48h-48c-26.5 0-48 21.5-48 48v48c0 26.5 21.5 48 48 48h32v8c0 13.3-10.7 24-24 24h-8c-17.7 0-32 14.3-32 32s14.3 32 32 32z"})
  );
}

export default LanQuotesSolid;
