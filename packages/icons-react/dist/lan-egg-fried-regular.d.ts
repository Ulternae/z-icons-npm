import React from 'react';

export interface LanEggFriedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEggFriedRegular: React.FC<LanEggFriedRegularProps>;
export default LanEggFriedRegular;
