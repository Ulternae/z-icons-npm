import React from 'react';

export interface LanSquarePersonConfinedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePersonConfinedRegular(props: LanSquarePersonConfinedRegularProps): React.ReactElement;
export default LanSquarePersonConfinedRegular;
