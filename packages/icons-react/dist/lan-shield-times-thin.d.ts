import React from 'react';

export interface LanShieldTimesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldTimesThin: React.FC<LanShieldTimesThinProps>;
export default LanShieldTimesThin;
