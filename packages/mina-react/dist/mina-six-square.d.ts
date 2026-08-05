import React from 'react';

export interface MinaSixSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSixSquare(props: MinaSixSquareProps): React.ReactElement;
export default MinaSixSquare;
