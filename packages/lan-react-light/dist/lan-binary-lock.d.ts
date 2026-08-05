import React from 'react';

export interface LanBinaryLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinaryLock(props: LanBinaryLockProps): React.ReactElement;
export default LanBinaryLock;
