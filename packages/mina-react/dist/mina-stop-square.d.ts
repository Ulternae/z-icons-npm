import React from 'react';

export interface MinaStopSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStopSquare(props: MinaStopSquareProps): React.ReactElement;
export default MinaStopSquare;
