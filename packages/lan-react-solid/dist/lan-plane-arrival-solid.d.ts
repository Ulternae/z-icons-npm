import React from 'react';

export interface LanPlaneArrivalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneArrivalSolid(props: LanPlaneArrivalSolidProps): React.ReactElement;
export default LanPlaneArrivalSolid;
