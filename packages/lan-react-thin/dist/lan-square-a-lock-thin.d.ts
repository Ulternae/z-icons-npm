import React from 'react';

export interface LanSquareALockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareALockThin(props: LanSquareALockThinProps): React.ReactElement;
export default LanSquareALockThin;
