import React from 'react';

export interface LanHoodCloakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHoodCloak: React.FC<LanHoodCloakProps>;
export default LanHoodCloak;
