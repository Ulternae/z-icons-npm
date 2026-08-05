import React from 'react';

export interface MinaRewindSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRewindSquare(props: MinaRewindSquareProps): React.ReactElement;
export default MinaRewindSquare;
