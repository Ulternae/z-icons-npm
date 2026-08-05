import React from 'react';

export interface LanLockAThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLockAThin(props: LanLockAThinProps): React.ReactElement;
export default LanLockAThin;
