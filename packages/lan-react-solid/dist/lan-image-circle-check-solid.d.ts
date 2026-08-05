import React from 'react';

export interface LanImageCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageCircleCheckSolid(props: LanImageCircleCheckSolidProps): React.ReactElement;
export default LanImageCircleCheckSolid;
