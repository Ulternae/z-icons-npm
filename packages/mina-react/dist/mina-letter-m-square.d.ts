import React from 'react';

export interface MinaLetterMSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterMSquare(props: MinaLetterMSquareProps): React.ReactElement;
export default MinaLetterMSquare;
