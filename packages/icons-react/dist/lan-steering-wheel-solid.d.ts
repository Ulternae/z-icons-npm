import React from 'react';

export interface LanSteeringWheelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSteeringWheelSolid: React.FC<LanSteeringWheelSolidProps>;
export default LanSteeringWheelSolid;
