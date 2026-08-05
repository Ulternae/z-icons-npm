import React from 'react';

export interface MinaEuroSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEuroSquare(props: MinaEuroSquareProps): React.ReactElement;
export default MinaEuroSquare;
