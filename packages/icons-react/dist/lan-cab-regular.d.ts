import React from 'react';

export interface LanCabRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCabRegular: React.FC<LanCabRegularProps>;
export default LanCabRegular;
