import React from 'react';

export interface LanUserCogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCogSolid: React.FC<LanUserCogSolidProps>;
export default LanUserCogSolid;
