import React from 'react';

export interface LanLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLockSolid(props: LanLockSolidProps): React.ReactElement;
export default LanLockSolid;
