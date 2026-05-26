import React from 'react';

export interface LanBowlHotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlHot: React.FC<LanBowlHotProps>;
export default LanBowlHot;
