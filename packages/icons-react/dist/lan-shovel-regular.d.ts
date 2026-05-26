import React from 'react';

export interface LanShovelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShovelRegular: React.FC<LanShovelRegularProps>;
export default LanShovelRegular;
