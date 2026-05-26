import React from 'react';

export interface LanSlidersSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersSimpleSolid: React.FC<LanSlidersSimpleSolidProps>;
export default LanSlidersSimpleSolid;
