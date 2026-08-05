import React from 'react';

export interface MinaSadSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSadSquare(props: MinaSadSquareProps): React.ReactElement;
export default MinaSadSquare;
