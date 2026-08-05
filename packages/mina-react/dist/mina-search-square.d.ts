import React from 'react';

export interface MinaSearchSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchSquare(props: MinaSearchSquareProps): React.ReactElement;
export default MinaSearchSquare;
