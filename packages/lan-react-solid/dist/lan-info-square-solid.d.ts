import React from 'react';

export interface LanInfoSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInfoSquareSolid(props: LanInfoSquareSolidProps): React.ReactElement;
export default LanInfoSquareSolid;
