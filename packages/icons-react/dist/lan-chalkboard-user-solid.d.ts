import React from 'react';

export interface LanChalkboardUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChalkboardUserSolid: React.FC<LanChalkboardUserSolidProps>;
export default LanChalkboardUserSolid;
