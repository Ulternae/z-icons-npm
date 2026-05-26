import React from 'react';

export interface LanCrosshairsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrosshairs: React.FC<LanCrosshairsProps>;
export default LanCrosshairs;
