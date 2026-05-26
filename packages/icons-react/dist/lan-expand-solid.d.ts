import React from 'react';

export interface LanExpandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExpandSolid: React.FC<LanExpandSolidProps>;
export default LanExpandSolid;
