import React from 'react';

export interface MinaHashSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHashSquare(props: MinaHashSquareProps): React.ReactElement;
export default MinaHashSquare;
