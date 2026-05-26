import React from 'react';

export interface LanHouseFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseFlag: React.FC<LanHouseFlagProps>;
export default LanHouseFlag;
