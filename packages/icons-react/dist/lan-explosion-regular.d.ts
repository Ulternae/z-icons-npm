import React from 'react';

export interface LanExplosionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExplosionRegular: React.FC<LanExplosionRegularProps>;
export default LanExplosionRegular;
