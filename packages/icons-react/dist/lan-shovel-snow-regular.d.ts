import React from 'react';

export interface LanShovelSnowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShovelSnowRegular: React.FC<LanShovelSnowRegularProps>;
export default LanShovelSnowRegular;
