import React from 'react';

export interface LanBadgeDollarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgeDollarSolid: React.FC<LanBadgeDollarSolidProps>;
export default LanBadgeDollarSolid;
