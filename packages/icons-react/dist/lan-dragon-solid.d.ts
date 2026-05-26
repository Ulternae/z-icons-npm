import React from 'react';

export interface LanDragonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDragonSolid: React.FC<LanDragonSolidProps>;
export default LanDragonSolid;
