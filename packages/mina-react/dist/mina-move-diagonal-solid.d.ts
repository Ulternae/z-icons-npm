import React from 'react';

export interface MinaMoveDiagonalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMoveDiagonalSolid(props: MinaMoveDiagonalSolidProps): React.ReactElement;
export default MinaMoveDiagonalSolid;
