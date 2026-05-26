import React from 'react';

export interface LanUtilityCanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUtilityCan: React.FC<LanUtilityCanProps>;
export default LanUtilityCan;
