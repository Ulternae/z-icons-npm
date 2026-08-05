import React from 'react';

export interface MinaLetterJSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterJSquare(props: MinaLetterJSquareProps): React.ReactElement;
export default MinaLetterJSquare;
