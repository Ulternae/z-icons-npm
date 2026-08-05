import React from 'react';

export interface LanPenSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenSquareRegular(props: LanPenSquareRegularProps): React.ReactElement;
export default LanPenSquareRegular;
