import React from 'react';

export interface LanElevatorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanElevatorThin(props: LanElevatorThinProps): React.ReactElement;
export default LanElevatorThin;
