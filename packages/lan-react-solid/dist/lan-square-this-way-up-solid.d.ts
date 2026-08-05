import React from 'react';

export interface LanSquareThisWayUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareThisWayUpSolid(props: LanSquareThisWayUpSolidProps): React.ReactElement;
export default LanSquareThisWayUpSolid;
