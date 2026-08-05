import React from 'react';

export interface LanPenSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenSquare(props: LanPenSquareProps): React.ReactElement;
export default LanPenSquare;
