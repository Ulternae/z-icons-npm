import React from 'react';

export interface CoreSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSquare(props: CoreSquareProps): React.ReactElement;
export default CoreSquare;
