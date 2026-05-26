import React from 'react';

export interface LanSuitcaseRollingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSuitcaseRolling: React.FC<LanSuitcaseRollingProps>;
export default LanSuitcaseRolling;
