import React from 'react';

export interface LanBackpackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBackpackSolid: React.FC<LanBackpackSolidProps>;
export default LanBackpackSolid;
