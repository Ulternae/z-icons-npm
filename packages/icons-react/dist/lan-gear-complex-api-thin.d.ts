import React from 'react';

export interface LanGearComplexApiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGearComplexApiThin: React.FC<LanGearComplexApiThinProps>;
export default LanGearComplexApiThin;
