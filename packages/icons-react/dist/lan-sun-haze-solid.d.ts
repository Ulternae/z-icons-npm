import React from 'react';

export interface LanSunHazeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunHazeSolid: React.FC<LanSunHazeSolidProps>;
export default LanSunHazeSolid;
