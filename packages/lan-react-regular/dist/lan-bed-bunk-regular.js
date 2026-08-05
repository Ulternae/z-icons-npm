import React from 'react';

export function LanBedBunkRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 0c13.3 0 24 10.7 24 24v120h160V40c0-22.1 17.9-40 40-40h144c66.3 0 120 53.7 120 120v368c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40.3H48V488c0 13.3-10.7 24-24 24S0 501.3 0 488V24C0 10.7 10.7 0 24 0m184 399.7V296c0-22.1 17.9-40 40-40h216v-64H48v207.7zM464 144v-24c0-39.8-32.2-72-72-72H256v96zm0 160H256v95.7h208zM80 320a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48-304a48 48 0 1 1 0 96 48 48 0 1 1 0-96"})
  );
}

export default LanBedBunkRegular;
