import React from 'react';

export interface MinaTwoSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTwoSquare(props: MinaTwoSquareProps): React.ReactElement;
export default MinaTwoSquare;
