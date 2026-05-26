import React from 'react';

export interface LanWeightScaleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWeightScaleSolid: React.FC<LanWeightScaleSolidProps>;
export default LanWeightScaleSolid;
