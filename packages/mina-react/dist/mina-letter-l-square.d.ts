import React from 'react';

export interface MinaLetterLSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterLSquare(props: MinaLetterLSquareProps): React.ReactElement;
export default MinaLetterLSquare;
