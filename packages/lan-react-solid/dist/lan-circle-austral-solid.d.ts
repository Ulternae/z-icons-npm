import React from 'react';

export interface LanCircleAustralSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleAustralSolid(props: LanCircleAustralSolidProps): React.ReactElement;
export default LanCircleAustralSolid;
