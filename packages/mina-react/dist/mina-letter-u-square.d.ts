import React from 'react';

export interface MinaLetterUSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterUSquare(props: MinaLetterUSquareProps): React.ReactElement;
export default MinaLetterUSquare;
