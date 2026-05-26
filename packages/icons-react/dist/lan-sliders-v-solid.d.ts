import React from 'react';

export interface LanSlidersVSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersVSolid: React.FC<LanSlidersVSolidProps>;
export default LanSlidersVSolid;
