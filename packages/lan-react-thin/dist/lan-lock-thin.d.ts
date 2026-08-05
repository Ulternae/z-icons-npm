import React from 'react';

export interface LanLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLockThin(props: LanLockThinProps): React.ReactElement;
export default LanLockThin;
