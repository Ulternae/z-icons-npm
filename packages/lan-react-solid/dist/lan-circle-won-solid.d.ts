import React from 'react';

export interface LanCircleWonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleWonSolid(props: LanCircleWonSolidProps): React.ReactElement;
export default LanCircleWonSolid;
