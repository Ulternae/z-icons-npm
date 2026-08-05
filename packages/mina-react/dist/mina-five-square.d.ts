import React from 'react';

export interface MinaFiveSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFiveSquare(props: MinaFiveSquareProps): React.ReactElement;
export default MinaFiveSquare;
