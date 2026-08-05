import React from 'react';

export interface MinaLetterFSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterFSquare(props: MinaLetterFSquareProps): React.ReactElement;
export default MinaLetterFSquare;
