import React from 'react';

export interface MinaLetterGSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterGSquare(props: MinaLetterGSquareProps): React.ReactElement;
export default MinaLetterGSquare;
