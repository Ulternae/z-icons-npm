import React from 'react';

export interface LanTruckDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckDropletSolid: React.FC<LanTruckDropletSolidProps>;
export default LanTruckDropletSolid;
