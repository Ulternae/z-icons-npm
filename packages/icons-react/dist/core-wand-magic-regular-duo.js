import React from 'react';

export const CoreWandMagicRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -29.3 576 544.05',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m93.5 400 229.6-229.6 50.7 50.7-229.6 229.6z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"m454.9-6.6-22.6-22.7-22.7 22.7L48.3 354.7c-25 25-25 65.5 0 90.5L99 496c25 25 65.5 25 90.5 0l361.4-361.4 22.6-22.6zm-92.2 137.4 69.6-69.6 50.7 50.7-69.6 69.6zm-39.6 39.6 50.7 50.7-229.6 229.6L93.5 400z"})
);

export default CoreWandMagicRegularDuo;
