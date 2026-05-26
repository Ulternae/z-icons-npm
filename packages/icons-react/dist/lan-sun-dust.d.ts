import React from 'react';

export interface LanSunDustProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunDust: React.FC<LanSunDustProps>;
export default LanSunDust;
