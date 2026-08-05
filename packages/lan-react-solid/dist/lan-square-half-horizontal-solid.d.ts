import React from 'react';

export interface LanSquareHalfHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareHalfHorizontalSolid(props: LanSquareHalfHorizontalSolidProps): React.ReactElement;
export default LanSquareHalfHorizontalSolid;
