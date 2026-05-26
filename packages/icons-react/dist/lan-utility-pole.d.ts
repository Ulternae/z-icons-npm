import React from 'react';

export interface LanUtilityPoleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUtilityPole: React.FC<LanUtilityPoleProps>;
export default LanUtilityPole;
