import React from 'react';

export interface LanGearComplexCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGearComplexCode: React.FC<LanGearComplexCodeProps>;
export default LanGearComplexCode;
