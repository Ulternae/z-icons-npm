import React from 'react';

export interface LanSyringeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSyringeSolid: React.FC<LanSyringeSolidProps>;
export default LanSyringeSolid;
