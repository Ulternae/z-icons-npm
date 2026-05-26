import React from 'react';

export interface LanTruckFrontProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckFront: React.FC<LanTruckFrontProps>;
export default LanTruckFront;
