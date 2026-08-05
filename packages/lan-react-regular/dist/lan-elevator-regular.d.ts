import React from 'react';

export interface LanElevatorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanElevatorRegular(props: LanElevatorRegularProps): React.ReactElement;
export default LanElevatorRegular;
