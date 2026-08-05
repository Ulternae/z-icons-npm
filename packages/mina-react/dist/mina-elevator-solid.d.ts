import React from 'react';

export interface MinaElevatorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaElevatorSolid(props: MinaElevatorSolidProps): React.ReactElement;
export default MinaElevatorSolid;
