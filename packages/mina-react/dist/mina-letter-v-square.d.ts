import React from 'react';

export interface MinaLetterVSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterVSquare(props: MinaLetterVSquareProps): React.ReactElement;
export default MinaLetterVSquare;
