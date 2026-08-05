import React from 'react';

export interface LanCheckSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheckSquare(props: LanCheckSquareProps): React.ReactElement;
export default LanCheckSquare;
