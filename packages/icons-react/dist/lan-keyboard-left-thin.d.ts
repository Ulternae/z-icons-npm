import React from 'react';

export interface LanKeyboardLeftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeyboardLeftThin: React.FC<LanKeyboardLeftThinProps>;
export default LanKeyboardLeftThin;
