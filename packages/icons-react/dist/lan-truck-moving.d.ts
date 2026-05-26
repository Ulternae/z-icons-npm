import React from 'react';

export interface LanTruckMovingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckMoving: React.FC<LanTruckMovingProps>;
export default LanTruckMoving;
