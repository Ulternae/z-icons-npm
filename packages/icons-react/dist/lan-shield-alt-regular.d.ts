import React from 'react';

export interface LanShieldAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldAltRegular: React.FC<LanShieldAltRegularProps>;
export default LanShieldAltRegular;
