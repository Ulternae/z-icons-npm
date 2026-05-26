import React from 'react';

export interface LanVenusDoubleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVenusDoubleSolid: React.FC<LanVenusDoubleSolidProps>;
export default LanVenusDoubleSolid;
