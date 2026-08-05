import React from 'react';

export interface LanLockOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLockOpenThin(props: LanLockOpenThinProps): React.ReactElement;
export default LanLockOpenThin;
