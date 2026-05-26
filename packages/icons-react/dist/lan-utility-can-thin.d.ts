import React from 'react';

export interface LanUtilityCanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUtilityCanThin: React.FC<LanUtilityCanThinProps>;
export default LanUtilityCanThin;
