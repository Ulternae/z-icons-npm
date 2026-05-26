import React from 'react';

export interface LanSyringeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSyringeRegular: React.FC<LanSyringeRegularProps>;
export default LanSyringeRegular;
