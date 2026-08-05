import React from 'react';

export interface LanCircleHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHalfSolid(props: LanCircleHalfSolidProps): React.ReactElement;
export default LanCircleHalfSolid;
