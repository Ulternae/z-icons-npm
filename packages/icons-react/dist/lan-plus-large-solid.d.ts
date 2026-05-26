import React from 'react';

export interface LanPlusLargeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlusLargeSolid: React.FC<LanPlusLargeSolidProps>;
export default LanPlusLargeSolid;
