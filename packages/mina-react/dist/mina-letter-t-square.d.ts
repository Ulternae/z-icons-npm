import React from 'react';

export interface MinaLetterTSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterTSquare(props: MinaLetterTSquareProps): React.ReactElement;
export default MinaLetterTSquare;
