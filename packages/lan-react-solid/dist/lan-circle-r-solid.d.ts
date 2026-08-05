import React from 'react';

export interface LanCircleRSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleRSolid(props: LanCircleRSolidProps): React.ReactElement;
export default LanCircleRSolid;
