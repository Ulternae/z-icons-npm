import React from 'react';

export interface LanSquareALockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareALockSolid(props: LanSquareALockSolidProps): React.ReactElement;
export default LanSquareALockSolid;
