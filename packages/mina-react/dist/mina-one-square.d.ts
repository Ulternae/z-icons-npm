import React from 'react';

export interface MinaOneSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOneSquare(props: MinaOneSquareProps): React.ReactElement;
export default MinaOneSquare;
