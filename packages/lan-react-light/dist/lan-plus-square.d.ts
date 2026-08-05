import React from 'react';

export interface LanPlusSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlusSquare(props: LanPlusSquareProps): React.ReactElement;
export default LanPlusSquare;
