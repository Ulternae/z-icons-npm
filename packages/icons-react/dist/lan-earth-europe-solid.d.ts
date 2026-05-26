import React from 'react';

export interface LanEarthEuropeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarthEuropeSolid: React.FC<LanEarthEuropeSolidProps>;
export default LanEarthEuropeSolid;
