import React from 'react';

export interface LanWindSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindSolid: React.FC<LanWindSolidProps>;
export default LanWindSolid;
