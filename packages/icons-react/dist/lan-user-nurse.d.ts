import React from 'react';

export interface LanUserNurseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserNurse: React.FC<LanUserNurseProps>;
export default LanUserNurse;
