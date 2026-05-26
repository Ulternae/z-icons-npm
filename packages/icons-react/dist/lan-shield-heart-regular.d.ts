import React from 'react';

export interface LanShieldHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldHeartRegular: React.FC<LanShieldHeartRegularProps>;
export default LanShieldHeartRegular;
