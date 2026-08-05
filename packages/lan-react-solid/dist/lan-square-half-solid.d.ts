import React from 'react';

export interface LanSquareHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareHalfSolid(props: LanSquareHalfSolidProps): React.ReactElement;
export default LanSquareHalfSolid;
