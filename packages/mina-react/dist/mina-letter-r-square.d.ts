import React from 'react';

export interface MinaLetterRSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterRSquare(props: MinaLetterRSquareProps): React.ReactElement;
export default MinaLetterRSquare;
