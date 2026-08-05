import React from 'react';

export interface MinaHeartSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartSquare(props: MinaHeartSquareProps): React.ReactElement;
export default MinaHeartSquare;
