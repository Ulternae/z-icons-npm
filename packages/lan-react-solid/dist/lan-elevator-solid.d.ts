import React from 'react';

export interface LanElevatorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanElevatorSolid(props: LanElevatorSolidProps): React.ReactElement;
export default LanElevatorSolid;
