import React from 'react';

export interface LanUserVneckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserVneckRegular: React.FC<LanUserVneckRegularProps>;
export default LanUserVneckRegular;
