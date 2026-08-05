import React from 'react';

export interface LanVialCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVialCircleCheckSolid(props: LanVialCircleCheckSolidProps): React.ReactElement;
export default LanVialCircleCheckSolid;
