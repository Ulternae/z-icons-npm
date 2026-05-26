import React from 'react';

export interface LanHeptagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeptagonSolid: React.FC<LanHeptagonSolidProps>;
export default LanHeptagonSolid;
