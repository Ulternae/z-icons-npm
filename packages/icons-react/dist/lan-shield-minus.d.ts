import React from 'react';

export interface LanShieldMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldMinus: React.FC<LanShieldMinusProps>;
export default LanShieldMinus;
