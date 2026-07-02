import React from 'react';

export interface CoreStarHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreStarHalfSolid(props: CoreStarHalfSolidProps): React.ReactElement;
export default CoreStarHalfSolid;
