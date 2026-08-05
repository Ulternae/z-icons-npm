import React from 'react';

export interface LanSquareSmallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareSmallRegular(props: LanSquareSmallRegularProps): React.ReactElement;
export default LanSquareSmallRegular;
