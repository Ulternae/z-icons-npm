import React from 'react';

export interface LanUsdSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsdSquare(props: LanUsdSquareProps): React.ReactElement;
export default LanUsdSquare;
