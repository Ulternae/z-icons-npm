import React from 'react';

export interface LanMarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsThin: React.FC<LanMarsThinProps>;
export default LanMarsThin;
