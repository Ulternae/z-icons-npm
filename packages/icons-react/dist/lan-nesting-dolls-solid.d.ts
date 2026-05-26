import React from 'react';

export interface LanNestingDollsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNestingDollsSolid: React.FC<LanNestingDollsSolidProps>;
export default LanNestingDollsSolid;
