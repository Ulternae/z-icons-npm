import React from 'react';

export interface MinaMinusSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinusSquare(props: MinaMinusSquareProps): React.ReactElement;
export default MinaMinusSquare;
