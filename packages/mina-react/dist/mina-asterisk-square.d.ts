import React from 'react';

export interface MinaAsteriskSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAsteriskSquare(props: MinaAsteriskSquareProps): React.ReactElement;
export default MinaAsteriskSquare;
