import React from 'react';

export interface LanUsersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersThin: React.FC<LanUsersThinProps>;
export default LanUsersThin;
