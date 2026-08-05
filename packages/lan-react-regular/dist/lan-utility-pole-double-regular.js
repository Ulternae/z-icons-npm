import React from 'react';

export function LanUtilityPoleDoubleRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v56H128V56c0-13.3-10.7-24-24-24S80 42.7 80 56v24H48V56c0-13.3-10.7-24-24-24S0 42.7 0 56v48c0 13.3 10.7 24 24 24h33.1L232 237.3V272H128v-24c0-13.3-10.7-24-24-24s-24 10.7-24 24v24H48v-24c0-13.3-10.7-24-24-24S0 234.7 0 248v48c0 13.3 10.7 24 24 24h33.1L232 429.3V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-58.7L454.9 320H488c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24s-24 10.7-24 24v24h-32v-24c0-13.3-10.7-24-24-24s-24 10.7-24 24v24H280v-34.7L454.9 128H488c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v24h-32V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v24H280zm84.3 104L280 180.7V128zM232 180.7 147.7 128H232zM364.3 320 280 372.7V320zM232 372.7 147.7 320H232z"})
  );
}

export default LanUtilityPoleDoubleRegular;
