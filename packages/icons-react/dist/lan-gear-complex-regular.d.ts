import React from 'react';

export interface LanGearComplexRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGearComplexRegular: React.FC<LanGearComplexRegularProps>;
export default LanGearComplexRegular;
