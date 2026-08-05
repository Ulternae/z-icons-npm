import React from 'react';

export interface MinaMathSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMathSquare(props: MinaMathSquareProps): React.ReactElement;
export default MinaMathSquare;
