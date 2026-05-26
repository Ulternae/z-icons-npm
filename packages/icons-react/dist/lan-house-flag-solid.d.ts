import React from 'react';

export interface LanHouseFlagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseFlagSolid: React.FC<LanHouseFlagSolidProps>;
export default LanHouseFlagSolid;
