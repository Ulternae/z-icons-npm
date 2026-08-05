import React from 'react';

export interface LanLockOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLockOpenSolid(props: LanLockOpenSolidProps): React.ReactElement;
export default LanLockOpenSolid;
