import React from 'react';

export interface LanCircleHalfStrokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHalfStrokeSolid(props: LanCircleHalfStrokeSolidProps): React.ReactElement;
export default LanCircleHalfStrokeSolid;
