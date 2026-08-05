import React from 'react';

export interface MinaLetterPSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterPSquare(props: MinaLetterPSquareProps): React.ReactElement;
export default MinaLetterPSquare;
