import React from 'react';

export interface MinaFunnySquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFunnySquare(props: MinaFunnySquareProps): React.ReactElement;
export default MinaFunnySquare;
