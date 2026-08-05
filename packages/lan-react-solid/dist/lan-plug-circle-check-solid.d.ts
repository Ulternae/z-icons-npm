import React from 'react';

export interface LanPlugCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugCircleCheckSolid(props: LanPlugCircleCheckSolidProps): React.ReactElement;
export default LanPlugCircleCheckSolid;
