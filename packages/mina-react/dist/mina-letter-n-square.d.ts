import React from 'react';

export interface MinaLetterNSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterNSquare(props: MinaLetterNSquareProps): React.ReactElement;
export default MinaLetterNSquare;
