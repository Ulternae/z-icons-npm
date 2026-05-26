import React from 'react';

export interface LanCubeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCubeRegular: React.FC<LanCubeRegularProps>;
export default LanCubeRegular;
