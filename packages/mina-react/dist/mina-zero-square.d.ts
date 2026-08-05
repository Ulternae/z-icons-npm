import React from 'react';

export interface MinaZeroSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZeroSquare(props: MinaZeroSquareProps): React.ReactElement;
export default MinaZeroSquare;
