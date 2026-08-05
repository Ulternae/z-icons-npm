import React from 'react';

export function LanCommentAltExclamation({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M416 32c53 0 96 43 96 96v224c0 53-43 96-96 96H296c-1.7 0-3.4.6-4.8 1.6l-118.4 88.8C168 542 162 544 156 544c-15.5 0-28-12.5-28-28v-68H96c-53 0-96-43-96-96V128c0-53 43-96 96-96zM96 64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h40c13.3 0 24 10.7 24 24v68l112-84c6.9-5.2 15.3-8 24-8h120c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm160 304a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-256c13.5 0 24.3 11.4 23.5 24.9l-7.6 136c-.5 8.5-7.5 15.1-16 15.1s-15.5-6.6-16-15.1l-7.6-136c-.8-13.5 10-24.9 23.5-24.9z"})
  );
}

export default LanCommentAltExclamation;
