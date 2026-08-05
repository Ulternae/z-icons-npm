import React from 'react';

export interface NeoSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSquare(props: NeoSquareProps): React.ReactElement;
export default NeoSquare;
