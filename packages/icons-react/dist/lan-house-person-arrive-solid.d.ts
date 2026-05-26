import React from 'react';

export interface LanHousePersonArriveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHousePersonArriveSolid: React.FC<LanHousePersonArriveSolidProps>;
export default LanHousePersonArriveSolid;
