import React from 'react';

export interface MinaAmpersandSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAmpersandSquare(props: MinaAmpersandSquareProps): React.ReactElement;
export default MinaAmpersandSquare;
