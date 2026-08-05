import React from 'react';

export interface MinaLetterQSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterQSquare(props: MinaLetterQSquareProps): React.ReactElement;
export default MinaLetterQSquare;
