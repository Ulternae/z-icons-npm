import React from 'react';

export interface MinaLetterESquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterESquare(props: MinaLetterESquareProps): React.ReactElement;
export default MinaLetterESquare;
