import React from 'react';

export interface MinaBitcoinSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBitcoinSquare(props: MinaBitcoinSquareProps): React.ReactElement;
export default MinaBitcoinSquare;
