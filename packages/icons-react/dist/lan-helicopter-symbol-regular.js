import React from 'react';

export const LanHelicopterSymbolRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M461.6 224h48.5C495.6 108.2 403.8 16.4 288 2v48.5c89.3 13.7 159.8 84.2 173.6 173.5m48.4 64h-48.5c-13.7 89.3-84.2 159.8-173.5 173.6v48.5c115.8-14.4 207.6-106.2 222-222zM2 288c14.4 115.8 106.2 207.6 222 222v-48.5C134.8 447.8 64.2 377.3 50.5 288zm0-64h48.5C64.2 134.7 134.8 64.2 224 50.4V2C108.2 16.4 16.4 108.2 2 224m190-64c0-13.3-10.7-24-24-24s-24 10.7-24 24v192c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h128v72c0 13.3 10.7 24 24 24s24-10.7 24-24V160c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H192z"})
);

export default LanHelicopterSymbolRegular;
