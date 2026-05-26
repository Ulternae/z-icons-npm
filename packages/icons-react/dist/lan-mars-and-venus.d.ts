import React from 'react';

export interface LanMarsAndVenusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsAndVenus: React.FC<LanMarsAndVenusProps>;
export default LanMarsAndVenus;
