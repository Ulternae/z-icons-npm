import React from 'react';

export interface MinaLetterWSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterWSquare(props: MinaLetterWSquareProps): React.ReactElement;
export default MinaLetterWSquare;
