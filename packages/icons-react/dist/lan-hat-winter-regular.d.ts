import React from 'react';

export interface LanHatWinterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatWinterRegular: React.FC<LanHatWinterRegularProps>;
export default LanHatWinterRegular;
