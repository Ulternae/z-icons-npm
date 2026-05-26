import React from 'react';

export interface LanSeatsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeatsSolid: React.FC<LanSeatsSolidProps>;
export default LanSeatsSolid;
