import React from 'react';

export interface MinaSmileSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSmileSquare(props: MinaSmileSquareProps): React.ReactElement;
export default MinaSmileSquare;
