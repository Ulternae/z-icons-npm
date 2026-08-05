import React from 'react';

export interface MinaCircleHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCircleHalfSolid(props: MinaCircleHalfSolidProps): React.ReactElement;
export default MinaCircleHalfSolid;
