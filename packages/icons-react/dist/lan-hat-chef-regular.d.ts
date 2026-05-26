import React from 'react';

export interface LanHatChefRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatChefRegular: React.FC<LanHatChefRegularProps>;
export default LanHatChefRegular;
