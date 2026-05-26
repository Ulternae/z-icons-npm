import React from 'react';

export interface LanBowArcherySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowArcherySolid: React.FC<LanBowArcherySolidProps>;
export default LanBowArcherySolid;
