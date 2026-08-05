import React from 'react';

export interface MinaWinkSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWinkSquare(props: MinaWinkSquareProps): React.ReactElement;
export default MinaWinkSquare;
