import React from 'react';

export interface LanShovelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShovelSolid: React.FC<LanShovelSolidProps>;
export default LanShovelSolid;
