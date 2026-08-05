import React from 'react';

export interface LanPenToSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenToSquareRegular(props: LanPenToSquareRegularProps): React.ReactElement;
export default LanPenToSquareRegular;
