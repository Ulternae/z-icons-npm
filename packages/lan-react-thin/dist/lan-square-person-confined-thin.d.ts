import React from 'react';

export interface LanSquarePersonConfinedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePersonConfinedThin(props: LanSquarePersonConfinedThinProps): React.ReactElement;
export default LanSquarePersonConfinedThin;
