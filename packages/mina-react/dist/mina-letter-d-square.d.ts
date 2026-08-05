import React from 'react';

export interface MinaLetterDSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterDSquare(props: MinaLetterDSquareProps): React.ReactElement;
export default MinaLetterDSquare;
