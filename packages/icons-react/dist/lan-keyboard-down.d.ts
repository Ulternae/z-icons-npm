import React from 'react';

export interface LanKeyboardDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeyboardDown: React.FC<LanKeyboardDownProps>;
export default LanKeyboardDown;
