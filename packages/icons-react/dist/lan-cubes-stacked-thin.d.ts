import React from 'react';

export interface LanCubesStackedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCubesStackedThin: React.FC<LanCubesStackedThinProps>;
export default LanCubesStackedThin;
