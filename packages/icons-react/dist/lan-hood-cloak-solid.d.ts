import React from 'react';

export interface LanHoodCloakSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHoodCloakSolid: React.FC<LanHoodCloakSolidProps>;
export default LanHoodCloakSolid;
