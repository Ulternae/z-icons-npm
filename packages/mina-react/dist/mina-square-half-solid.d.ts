import React from 'react';

export interface MinaSquareHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSquareHalfSolid(props: MinaSquareHalfSolidProps): React.ReactElement;
export default MinaSquareHalfSolid;
