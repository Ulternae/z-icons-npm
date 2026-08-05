import React from 'react';

export interface MinaElevatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaElevator(props: MinaElevatorProps): React.ReactElement;
export default MinaElevator;
