import React from 'react';

export interface MinaDotsVerticalSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsVerticalSquare(props: MinaDotsVerticalSquareProps): React.ReactElement;
export default MinaDotsVerticalSquare;
