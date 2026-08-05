import React from 'react';

export interface LanHeartCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartCircleCheckSolid(props: LanHeartCircleCheckSolidProps): React.ReactElement;
export default LanHeartCircleCheckSolid;
