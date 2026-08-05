import React from 'react';

export interface LanUserLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserLock(props: LanUserLockProps): React.ReactElement;
export default LanUserLock;
