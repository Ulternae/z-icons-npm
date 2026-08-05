import React from 'react';

export interface LanFileCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCircleCheckSolid(props: LanFileCircleCheckSolidProps): React.ReactElement;
export default LanFileCircleCheckSolid;
