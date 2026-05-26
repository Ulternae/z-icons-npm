import React from 'react';

export interface LanBowlHotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlHotSolid: React.FC<LanBowlHotSolidProps>;
export default LanBowlHotSolid;
