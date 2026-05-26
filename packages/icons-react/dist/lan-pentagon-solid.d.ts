import React from 'react';

export interface LanPentagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPentagonSolid: React.FC<LanPentagonSolidProps>;
export default LanPentagonSolid;
