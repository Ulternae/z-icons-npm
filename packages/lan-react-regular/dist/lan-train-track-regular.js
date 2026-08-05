import React from 'react';

export function LanTrainTrackRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M165.6 32.7c12.9 3.1 20.8 16 17.7 28.9L173.1 104h165.7l-10.2-42.4c-3.1-12.9 4.8-25.8 17.7-28.9s25.8 4.8 28.9 17.7l12.9 53.6h35.8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24.3l19.2 80h37.1c13.3 0 24 10.7 24 24s-10.7 24-24 24h-25.6l19.2 80h38.4c13.3 0 24 10.7 24 24s-10.7 24-24 24h-26.8l10.2 42.4c3.1 12.9-4.8 25.8-17.7 28.9s-25.8-4.8-28.9-17.7L411.8 408H100.2l-12.9 53.6c-3.1 12.9-16 20.8-28.9 17.7s-20.8-16.1-17.7-28.9L50.8 408H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h38.4l19.2-80H56c-13.3 0-24-10.7-24-24s10.7-24 24-24h37.1l19.2-80H88c-13.3 0-24-10.7-24-24s10.7-24 24-24h35.8l12.9-53.6c3.1-12.9 16-20.8 28.9-17.7m-4 119.3-19.2 80h227.1l-19.2-80zm219.5 128H130.9l-19.2 80h288.6z"})
  );
}

export default LanTrainTrackRegular;
