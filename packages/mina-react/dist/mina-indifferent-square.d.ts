import React from 'react';

export interface MinaIndifferentSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaIndifferentSquare(props: MinaIndifferentSquareProps): React.ReactElement;
export default MinaIndifferentSquare;
