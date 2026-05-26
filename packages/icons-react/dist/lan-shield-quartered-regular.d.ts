import React from 'react';

export interface LanShieldQuarteredRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldQuarteredRegular: React.FC<LanShieldQuarteredRegularProps>;
export default LanShieldQuarteredRegular;
