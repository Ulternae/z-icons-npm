import React from 'react';

export interface MinaDollarSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDollarSquare(props: MinaDollarSquareProps): React.ReactElement;
export default MinaDollarSquare;
