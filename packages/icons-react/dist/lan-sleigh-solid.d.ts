import React from 'react';

export interface LanSleighSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSleighSolid: React.FC<LanSleighSolidProps>;
export default LanSleighSolid;
