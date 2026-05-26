import React from 'react';

export interface LanUserGraduateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserGraduateSolid: React.FC<LanUserGraduateSolidProps>;
export default LanUserGraduateSolid;
