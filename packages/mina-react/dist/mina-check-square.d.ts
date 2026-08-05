import React from 'react';

export interface MinaCheckSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckSquare(props: MinaCheckSquareProps): React.ReactElement;
export default MinaCheckSquare;
