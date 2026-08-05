import React from 'react';

export interface LanArrowDownToSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowDownToSquare(props: LanArrowDownToSquareProps): React.ReactElement;
export default LanArrowDownToSquare;
