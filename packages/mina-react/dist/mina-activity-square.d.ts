import React from 'react';

export interface MinaActivitySquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaActivitySquare(props: MinaActivitySquareProps): React.ReactElement;
export default MinaActivitySquare;
