import React from 'react';

export interface LanHoodCloakRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHoodCloakRegular: React.FC<LanHoodCloakRegularProps>;
export default LanHoodCloakRegular;
