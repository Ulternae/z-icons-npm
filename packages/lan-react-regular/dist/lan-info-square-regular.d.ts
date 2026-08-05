import React from 'react';

export interface LanInfoSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInfoSquareRegular(props: LanInfoSquareRegularProps): React.ReactElement;
export default LanInfoSquareRegular;
