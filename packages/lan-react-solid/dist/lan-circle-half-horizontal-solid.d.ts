import React from 'react';

export interface LanCircleHalfHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHalfHorizontalSolid(props: LanCircleHalfHorizontalSolidProps): React.ReactElement;
export default LanCircleHalfHorizontalSolid;
