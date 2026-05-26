import React from 'react';

export interface LanPopcornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPopcornSolid: React.FC<LanPopcornSolidProps>;
export default LanPopcornSolid;
