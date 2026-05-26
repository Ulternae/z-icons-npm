import React from 'react';

export interface LanKeyboardLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeyboardLeft: React.FC<LanKeyboardLeftProps>;
export default LanKeyboardLeft;
