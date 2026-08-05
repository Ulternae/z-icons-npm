import React from 'react';

export interface LanMinusSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMinusSquare(props: LanMinusSquareProps): React.ReactElement;
export default LanMinusSquare;
