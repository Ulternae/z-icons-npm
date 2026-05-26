import React from 'react';

export interface LanSteeringWheelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSteeringWheel: React.FC<LanSteeringWheelProps>;
export default LanSteeringWheel;
