import React from 'react';

export interface MinaCodeSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCodeSquare(props: MinaCodeSquareProps): React.ReactElement;
export default MinaCodeSquare;
