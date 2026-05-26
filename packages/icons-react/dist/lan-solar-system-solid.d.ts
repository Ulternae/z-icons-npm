import React from 'react';

export interface LanSolarSystemSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSolarSystemSolid: React.FC<LanSolarSystemSolidProps>;
export default LanSolarSystemSolid;
