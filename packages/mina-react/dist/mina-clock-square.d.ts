import React from 'react';

export interface MinaClockSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockSquare(props: MinaClockSquareProps): React.ReactElement;
export default MinaClockSquare;
