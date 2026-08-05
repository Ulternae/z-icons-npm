import React from 'react';

export interface LanPlaneCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneCircleCheckSolid(props: LanPlaneCircleCheckSolidProps): React.ReactElement;
export default LanPlaneCircleCheckSolid;
