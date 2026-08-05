import React from 'react';

export interface MinaThreeSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThreeSquare(props: MinaThreeSquareProps): React.ReactElement;
export default MinaThreeSquare;
