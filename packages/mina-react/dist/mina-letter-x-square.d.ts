import React from 'react';

export interface MinaLetterXSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterXSquare(props: MinaLetterXSquareProps): React.ReactElement;
export default MinaLetterXSquare;
