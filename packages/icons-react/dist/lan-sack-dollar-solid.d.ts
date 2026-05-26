import React from 'react';

export interface LanSackDollarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSackDollarSolid: React.FC<LanSackDollarSolidProps>;
export default LanSackDollarSolid;
