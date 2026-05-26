import React from 'react';

export interface LanVenusMarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVenusMarsThin: React.FC<LanVenusMarsThinProps>;
export default LanVenusMarsThin;
