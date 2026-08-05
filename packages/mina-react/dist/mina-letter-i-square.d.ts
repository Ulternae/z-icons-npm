import React from 'react';

export interface MinaLetterISquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterISquare(props: MinaLetterISquareProps): React.ReactElement;
export default MinaLetterISquare;
