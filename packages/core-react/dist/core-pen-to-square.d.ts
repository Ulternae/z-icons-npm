import React from 'react';

export interface CorePenToSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePenToSquare(props: CorePenToSquareProps): React.ReactElement;
export default CorePenToSquare;
