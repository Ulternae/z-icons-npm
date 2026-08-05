import React from 'react';

export interface MinaMoveDiagonalOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMoveDiagonalOneSolid(props: MinaMoveDiagonalOneSolidProps): React.ReactElement;
export default MinaMoveDiagonalOneSolid;
