import React from 'react';

export interface LanSteeringWheelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSteeringWheelSolid(props: LanSteeringWheelSolidProps): React.ReactElement;
export default LanSteeringWheelSolid;
