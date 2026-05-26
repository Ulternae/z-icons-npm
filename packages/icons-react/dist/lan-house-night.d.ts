import React from 'react';

export interface LanHouseNightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseNight: React.FC<LanHouseNightProps>;
export default LanHouseNight;
