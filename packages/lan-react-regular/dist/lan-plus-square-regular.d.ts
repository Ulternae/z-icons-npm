import React from 'react';

export interface LanPlusSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlusSquareRegular(props: LanPlusSquareRegularProps): React.ReactElement;
export default LanPlusSquareRegular;
