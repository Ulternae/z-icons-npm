import React from 'react';

export interface LanDroneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrone: React.FC<LanDroneProps>;
export default LanDrone;
