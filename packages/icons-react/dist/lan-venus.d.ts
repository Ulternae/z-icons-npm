import React from 'react';

export interface LanVenusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVenus: React.FC<LanVenusProps>;
export default LanVenus;
