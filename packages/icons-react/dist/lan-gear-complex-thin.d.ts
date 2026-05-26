import React from 'react';

export interface LanGearComplexThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGearComplexThin: React.FC<LanGearComplexThinProps>;
export default LanGearComplexThin;
