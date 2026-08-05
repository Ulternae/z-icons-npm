import React from 'react';

export interface MinaLetterASquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterASquare(props: MinaLetterASquareProps): React.ReactElement;
export default MinaLetterASquare;
