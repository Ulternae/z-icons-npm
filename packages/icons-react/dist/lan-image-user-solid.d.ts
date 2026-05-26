import React from 'react';

export interface LanImageUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageUserSolid: React.FC<LanImageUserSolidProps>;
export default LanImageUserSolid;
