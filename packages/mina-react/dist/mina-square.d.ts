import React from 'react';

export interface MinaSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSquare(props: MinaSquareProps): React.ReactElement;
export default MinaSquare;
