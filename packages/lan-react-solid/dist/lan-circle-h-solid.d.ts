import React from 'react';

export interface LanCircleHSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHSolid(props: LanCircleHSolidProps): React.ReactElement;
export default LanCircleHSolid;
