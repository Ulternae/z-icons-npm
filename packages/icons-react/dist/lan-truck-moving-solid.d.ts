import React from 'react';

export interface LanTruckMovingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckMovingSolid: React.FC<LanTruckMovingSolidProps>;
export default LanTruckMovingSolid;
