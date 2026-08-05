import React from 'react';

export interface MinaLetterZSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterZSquare(props: MinaLetterZSquareProps): React.ReactElement;
export default MinaLetterZSquare;
