import React from 'react';

export interface LanCubesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCubesRegular: React.FC<LanCubesRegularProps>;
export default LanCubesRegular;
