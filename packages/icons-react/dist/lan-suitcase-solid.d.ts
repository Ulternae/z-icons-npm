import React from 'react';

export interface LanSuitcaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSuitcaseSolid: React.FC<LanSuitcaseSolidProps>;
export default LanSuitcaseSolid;
