import React from 'react';

export interface MinaPlusSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlusSquare(props: MinaPlusSquareProps): React.ReactElement;
export default MinaPlusSquare;
