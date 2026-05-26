import React from 'react';

export interface LanElevatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanElevator: React.FC<LanElevatorProps>;
export default LanElevator;
