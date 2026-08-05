import React from 'react';

export interface MinaMusicSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMusicSquare(props: MinaMusicSquareProps): React.ReactElement;
export default MinaMusicSquare;
