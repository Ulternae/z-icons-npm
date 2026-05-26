import React from 'react';

export interface LanSunRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunRegular: React.FC<LanSunRegularProps>;
export default LanSunRegular;
