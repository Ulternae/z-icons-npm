import React from 'react';

export interface MinaRupeeSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRupeeSquare(props: MinaRupeeSquareProps): React.ReactElement;
export default MinaRupeeSquare;
