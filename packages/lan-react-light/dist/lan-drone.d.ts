import React from 'react';

export interface LanDroneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrone(props: LanDroneProps): React.ReactElement;
export default LanDrone;
