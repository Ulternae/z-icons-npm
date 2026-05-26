import React from 'react';

export interface LanCubesStackedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCubesStackedRegular: React.FC<LanCubesStackedRegularProps>;
export default LanCubesStackedRegular;
