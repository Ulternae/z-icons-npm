import React from 'react';

export const LanQuotesRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 96C0 43 43 0 96 0h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8c-26.5 0-48 21.5-48 48h48c26.5 0 48 21.5 48 48v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm48 72v24h48v-48H48zm128-72c0-53 43-96 96-96h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8c-26.5 0-48 21.5-48 48h48c26.5 0 48 21.5 48 48v48c0 26.5-21.5 48-48 48h-48c-26.5 0-48-21.5-48-48zm48 48v48h48v-48zm352 272c0 53-43 96-96 96h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8c26.5 0 48-21.5 48-48h-48c-26.5 0-48-21.5-48-48v-48c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48zm-48-48v-48h-48v48zm-128 48c0 53-43 96-96 96h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8c26.5 0 48-21.5 48-48h-48c-26.5 0-48-21.5-48-48v-48c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48zm-48-72v-24h-48v48h48z"})
);

export default LanQuotesRegular;
