import React from 'react';

export interface LanSeatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeatSolid: React.FC<LanSeatSolidProps>;
export default LanSeatSolid;
