import React from 'react';

export interface LanSteeringWheelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSteeringWheelThin(props: LanSteeringWheelThinProps): React.ReactElement;
export default LanSteeringWheelThin;
