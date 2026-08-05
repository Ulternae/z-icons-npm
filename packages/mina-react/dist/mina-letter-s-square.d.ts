import React from 'react';

export interface MinaLetterSSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterSSquare(props: MinaLetterSSquareProps): React.ReactElement;
export default MinaLetterSSquare;
