import React from 'react';

export interface LanGearComplexApiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGearComplexApiRegular: React.FC<LanGearComplexApiRegularProps>;
export default LanGearComplexApiRegular;
