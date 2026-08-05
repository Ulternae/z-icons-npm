import React from 'react';

export interface LanElevatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanElevator(props: LanElevatorProps): React.ReactElement;
export default LanElevator;
