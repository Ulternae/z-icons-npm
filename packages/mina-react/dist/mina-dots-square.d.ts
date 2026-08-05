import React from 'react';

export interface MinaDotsSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsSquare(props: MinaDotsSquareProps): React.ReactElement;
export default MinaDotsSquare;
