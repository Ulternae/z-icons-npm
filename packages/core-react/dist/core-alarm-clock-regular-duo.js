import React from 'react';

export function CoreAlarmClockRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -45.2 640 557.2',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128.3 256a191.7 191.7 0 1 0 383.5 0 191.7 191.7 0 1 0-383.5 0m164-140h56v112h96v56h-124c-15.5 0-28-12.5-28-28z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M319.7 512a256 256 0 1 1 .5-512 256 256 0 1 1-.5 512m.5-448a192 192 0 1 0-.5 384 192 192 0 1 0 .5-384m28 164h96v56h-124c-15.5 0-28-12.5-28-28V116h56zM173.5 0 64.3 109.2 19 64 128.3-45.2zm448 64-45.2 45.2L467 0l45.3-45.2z"})
  );
}

export default CoreAlarmClockRegularDuo;
