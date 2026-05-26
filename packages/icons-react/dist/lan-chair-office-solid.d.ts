import React from 'react';

export interface LanChairOfficeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChairOfficeSolid: React.FC<LanChairOfficeSolidProps>;
export default LanChairOfficeSolid;
