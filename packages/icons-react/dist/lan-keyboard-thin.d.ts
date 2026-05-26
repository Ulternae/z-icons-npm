import React from 'react';

export interface LanKeyboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeyboardThin: React.FC<LanKeyboardThinProps>;
export default LanKeyboardThin;
