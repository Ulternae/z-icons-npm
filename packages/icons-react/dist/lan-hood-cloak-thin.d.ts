import React from 'react';

export interface LanHoodCloakThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHoodCloakThin: React.FC<LanHoodCloakThinProps>;
export default LanHoodCloakThin;
