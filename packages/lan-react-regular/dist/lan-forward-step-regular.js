import React from 'react';

export function LanForwardStepRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M360 32c-13.3 0-24 10.7-24 24v162.7L62 38.6c-12.3-8.1-28-8.8-41-1.8S0 57.3 0 72v368c0 14.7 8.1 28.2 21 35.2s28.7 6.3 41-1.8l274-180V456c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24m-54.6 224L48 425.2V86.8z"})
  );
}

export default LanForwardStepRegular;
