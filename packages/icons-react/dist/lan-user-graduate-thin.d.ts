import React from 'react';

export interface LanUserGraduateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserGraduateThin: React.FC<LanUserGraduateThinProps>;
export default LanUserGraduateThin;
