import React from 'react';

export interface MinaLetterYSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterYSquare(props: MinaLetterYSquareProps): React.ReactElement;
export default MinaLetterYSquare;
