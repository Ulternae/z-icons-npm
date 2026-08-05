import React from 'react';

export interface MinaPauseSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPauseSquare(props: MinaPauseSquareProps): React.ReactElement;
export default MinaPauseSquare;
