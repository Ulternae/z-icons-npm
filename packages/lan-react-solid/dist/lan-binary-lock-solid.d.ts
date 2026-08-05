import React from 'react';

export interface LanBinaryLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinaryLockSolid(props: LanBinaryLockSolidProps): React.ReactElement;
export default LanBinaryLockSolid;
