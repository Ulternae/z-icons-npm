import React from 'react';

export interface MinaElevatorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaElevatorSolid: React.FC<MinaElevatorSolidProps>;
export default MinaElevatorSolid;
