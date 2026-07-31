import React from 'react';

export const CorePlusRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 224h192v64H256v192h-64V288H0v-64h192V32h64z"})
);

export default CorePlusRegularDuo;
