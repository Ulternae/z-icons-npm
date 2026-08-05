import React from 'react';

export interface LanPenToSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenToSquare(props: LanPenToSquareProps): React.ReactElement;
export default LanPenToSquare;
