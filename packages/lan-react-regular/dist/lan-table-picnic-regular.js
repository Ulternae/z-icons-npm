import React from 'react';

export function LanTablePicnicRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M78.2 433.2c-5.1 12.2-19.1 18-31.3 13s-18-19.1-13-31.3l32.7-78.8h52l-40.3 97.2zm400-18.4c5.1 12.2-.7 26.3-13 31.3s-26.3-.7-31.3-13l-40.3-97.2h52l32.7 78.8zM424 64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-71.4l53.1 128H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h82.3l53.1-128H88c-13.3 0-24-10.7-24-24s10.7-24 24-24zM158.3 240h195.4l-53.1-128h-89.3l-53.1 128z"})
  );
}

export default LanTablePicnicRegular;
