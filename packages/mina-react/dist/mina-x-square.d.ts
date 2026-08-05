import React from 'react';

export interface MinaXSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaXSquare(props: MinaXSquareProps): React.ReactElement;
export default MinaXSquare;
