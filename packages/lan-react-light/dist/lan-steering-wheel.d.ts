import React from 'react';

export interface LanSteeringWheelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSteeringWheel(props: LanSteeringWheelProps): React.ReactElement;
export default LanSteeringWheel;
