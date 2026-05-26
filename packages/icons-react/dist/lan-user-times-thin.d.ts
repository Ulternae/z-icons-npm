import React from 'react';

export interface LanUserTimesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserTimesThin: React.FC<LanUserTimesThinProps>;
export default LanUserTimesThin;
