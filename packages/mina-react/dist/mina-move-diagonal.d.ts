import React from 'react';

export interface MinaMoveDiagonalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMoveDiagonal(props: MinaMoveDiagonalProps): React.ReactElement;
export default MinaMoveDiagonal;
