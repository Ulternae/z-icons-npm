import React from 'react';

export interface MinaPlaySquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlaySquare(props: MinaPlaySquareProps): React.ReactElement;
export default MinaPlaySquare;
