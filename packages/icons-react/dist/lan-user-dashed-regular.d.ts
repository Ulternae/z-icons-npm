import React from 'react';

export interface LanUserDashedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserDashedRegular: React.FC<LanUserDashedRegularProps>;
export default LanUserDashedRegular;
