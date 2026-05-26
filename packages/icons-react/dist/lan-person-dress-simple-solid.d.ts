import React from 'react';

export interface LanPersonDressSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDressSimpleSolid: React.FC<LanPersonDressSimpleSolidProps>;
export default LanPersonDressSimpleSolid;
