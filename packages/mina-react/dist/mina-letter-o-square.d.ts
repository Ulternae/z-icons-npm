import React from 'react';

export interface MinaLetterOSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterOSquare(props: MinaLetterOSquareProps): React.ReactElement;
export default MinaLetterOSquare;
