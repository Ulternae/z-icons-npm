import React from 'react';

export interface MinaLetterCSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterCSquare(props: MinaLetterCSquareProps): React.ReactElement;
export default MinaLetterCSquare;
