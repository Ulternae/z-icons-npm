import React from 'react';

export interface LanLockOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLockOpen(props: LanLockOpenProps): React.ReactElement;
export default LanLockOpen;
