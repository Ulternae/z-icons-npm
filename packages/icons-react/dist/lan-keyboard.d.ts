import React from 'react';

export interface LanKeyboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeyboard: React.FC<LanKeyboardProps>;
export default LanKeyboard;
