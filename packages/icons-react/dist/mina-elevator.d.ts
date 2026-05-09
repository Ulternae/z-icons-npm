import React from 'react';

export interface MinaElevatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaElevator: React.FC<MinaElevatorProps>;
export default MinaElevator;
