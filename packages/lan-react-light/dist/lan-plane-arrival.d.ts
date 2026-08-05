import React from 'react';

export interface LanPlaneArrivalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneArrival(props: LanPlaneArrivalProps): React.ReactElement;
export default LanPlaneArrival;
