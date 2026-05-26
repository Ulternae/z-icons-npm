import React from 'react';

export interface LanShovelSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShovelSnow: React.FC<LanShovelSnowProps>;
export default LanShovelSnow;
