import React from 'react';

export interface MinaEightSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEightSquare(props: MinaEightSquareProps): React.ReactElement;
export default MinaEightSquare;
