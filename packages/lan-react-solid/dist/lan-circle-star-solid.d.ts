import React from 'react';

export interface LanCircleStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleStarSolid(props: LanCircleStarSolidProps): React.ReactElement;
export default LanCircleStarSolid;
