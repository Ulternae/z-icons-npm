import React from 'react';

export interface MinaInfoSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfoSquare(props: MinaInfoSquareProps): React.ReactElement;
export default MinaInfoSquare;
