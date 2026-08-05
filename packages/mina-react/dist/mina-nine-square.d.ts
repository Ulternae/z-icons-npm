import React from 'react';

export interface MinaNineSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNineSquare(props: MinaNineSquareProps): React.ReactElement;
export default MinaNineSquare;
