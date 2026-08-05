import React from 'react';

export interface MinaSevenSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSevenSquare(props: MinaSevenSquareProps): React.ReactElement;
export default MinaSevenSquare;
