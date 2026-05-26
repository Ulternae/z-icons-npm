import React from 'react';

export interface LanGearComplexProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGearComplex: React.FC<LanGearComplexProps>;
export default LanGearComplex;
