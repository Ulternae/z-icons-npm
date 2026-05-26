import React from 'react';

export interface LanSteeringWheelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSteeringWheelThin: React.FC<LanSteeringWheelThinProps>;
export default LanSteeringWheelThin;
