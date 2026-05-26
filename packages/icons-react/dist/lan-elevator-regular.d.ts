import React from 'react';

export interface LanElevatorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanElevatorRegular: React.FC<LanElevatorRegularProps>;
export default LanElevatorRegular;
