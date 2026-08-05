import React from 'react';

export interface LanUsdSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsdSquareRegular(props: LanUsdSquareRegularProps): React.ReactElement;
export default LanUsdSquareRegular;
