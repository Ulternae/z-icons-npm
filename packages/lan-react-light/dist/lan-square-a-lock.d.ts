import React from 'react';

export interface LanSquareALockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareALock(props: LanSquareALockProps): React.ReactElement;
export default LanSquareALock;
