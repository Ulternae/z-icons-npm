import React from 'react';

export interface CoreKeyboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreKeyboard: React.FC<CoreKeyboardProps>;
export default CoreKeyboard;
