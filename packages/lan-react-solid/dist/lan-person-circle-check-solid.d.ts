import React from 'react';

export interface LanPersonCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCircleCheckSolid(props: LanPersonCircleCheckSolidProps): React.ReactElement;
export default LanPersonCircleCheckSolid;
