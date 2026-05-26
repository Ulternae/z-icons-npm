import React from 'react';

export interface LanHouseFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseFire: React.FC<LanHouseFireProps>;
export default LanHouseFire;
