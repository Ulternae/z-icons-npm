import React from 'react';

export interface MinaAngrySquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAngrySquare(props: MinaAngrySquareProps): React.ReactElement;
export default MinaAngrySquare;
