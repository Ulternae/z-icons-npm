import React from 'react';

export interface LanBowlSpoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlSpoonSolid: React.FC<LanBowlSpoonSolidProps>;
export default LanBowlSpoonSolid;
