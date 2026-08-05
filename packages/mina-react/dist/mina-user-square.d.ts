import React from 'react';

export interface MinaUserSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserSquare(props: MinaUserSquareProps): React.ReactElement;
export default MinaUserSquare;
