import React from 'react';

export function LanTableColumnsRemoveAfterRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448.4 32c35.3 0 64 28.7 64 64v32h-48V96c0-8.8-7.2-16-16-16h-136v352h136c8.8 0 16-7.2 16-16v-32h48v32c0 33.1-25.2 60.4-57.5 63.7l-6.5.3h-320l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1l-.3-6.5v-320c0-35.3 28.7-64 64-64h320zm-320 48c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h136V80zm386 108.1c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-33.9 33.9 34 34c9.4 9.4 9.4 24.6 0 33.9-9.4 9.4-24.6 9.4-34 0l-33.9-33.9-33.9 33.9c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l33.9-33.9-33.9-33.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l33.9 33.9 33.9-33.9z"})
  );
}

export default LanTableColumnsRemoveAfterRegular;
