import React from 'react';

export interface LanUserAstronautRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserAstronautRegular: React.FC<LanUserAstronautRegularProps>;
export default LanUserAstronautRegular;
