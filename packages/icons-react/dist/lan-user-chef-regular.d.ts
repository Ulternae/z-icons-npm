import React from 'react';

export interface LanUserChefRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserChefRegular: React.FC<LanUserChefRegularProps>;
export default LanUserChefRegular;
