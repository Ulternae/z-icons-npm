import React from 'react';

export interface MinaLetterHSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterHSquare(props: MinaLetterHSquareProps): React.ReactElement;
export default MinaLetterHSquare;
