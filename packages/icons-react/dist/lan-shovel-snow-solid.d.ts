import React from 'react';

export interface LanShovelSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShovelSnowSolid: React.FC<LanShovelSnowSolidProps>;
export default LanShovelSnowSolid;
