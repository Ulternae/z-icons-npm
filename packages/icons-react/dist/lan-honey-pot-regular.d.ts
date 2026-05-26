import React from 'react';

export interface LanHoneyPotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHoneyPotRegular: React.FC<LanHoneyPotRegularProps>;
export default LanHoneyPotRegular;
