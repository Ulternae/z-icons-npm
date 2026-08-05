import React from 'react';

export interface LanSquarePersonConfinedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePersonConfinedSolid(props: LanSquarePersonConfinedSolidProps): React.ReactElement;
export default LanSquarePersonConfinedSolid;
