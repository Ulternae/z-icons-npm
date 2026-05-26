import React from 'react';

export interface LanKeyboardDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeyboardDownThin: React.FC<LanKeyboardDownThinProps>;
export default LanKeyboardDownThin;
