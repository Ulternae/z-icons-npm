import React from 'react';

export interface LanElevatorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanElevatorSolid: React.FC<LanElevatorSolidProps>;
export default LanElevatorSolid;
