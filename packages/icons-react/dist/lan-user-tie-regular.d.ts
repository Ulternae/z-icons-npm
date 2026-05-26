import React from 'react';

export interface LanUserTieRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserTieRegular: React.FC<LanUserTieRegularProps>;
export default LanUserTieRegular;
