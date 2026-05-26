import React from 'react';

export interface LanUserAlienRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserAlienRegular: React.FC<LanUserAlienRegularProps>;
export default LanUserAlienRegular;
