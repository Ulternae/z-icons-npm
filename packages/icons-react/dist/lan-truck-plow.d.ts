import React from 'react';

export interface LanTruckPlowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckPlow: React.FC<LanTruckPlowProps>;
export default LanTruckPlow;
