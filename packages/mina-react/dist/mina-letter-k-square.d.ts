import React from 'react';

export interface MinaLetterKSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterKSquare(props: MinaLetterKSquareProps): React.ReactElement;
export default MinaLetterKSquare;
