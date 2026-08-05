import React from 'react';

export interface MinaLetterBSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterBSquare(props: MinaLetterBSquareProps): React.ReactElement;
export default MinaLetterBSquare;
