import React from 'react';

export interface LanUserCogRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCogRegular: React.FC<LanUserCogRegularProps>;
export default LanUserCogRegular;
