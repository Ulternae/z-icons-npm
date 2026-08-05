import React from 'react';

export interface MinaYenSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaYenSquare(props: MinaYenSquareProps): React.ReactElement;
export default MinaYenSquare;
