import React from 'react';

export interface LanHomeUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHomeUserSolid: React.FC<LanHomeUserSolidProps>;
export default LanHomeUserSolid;
