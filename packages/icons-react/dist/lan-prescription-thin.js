import React from 'react';

export const LanPrescriptionThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M24 0C10.7 0 0 10.7 0 24v288c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h132.7l128 128-146.3 146.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L288 363.3l146.3 146.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L299.3 352l146.4-146.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L288 340.7 171.3 224h4.7c61.9 0 112-50.1 112-112S237.9 0 176 0zm128 208H16V24c0-4.4 3.6-8 8-8h152c53 0 96 43 96 96s-43 96-96 96z"})
);

export default LanPrescriptionThin;
