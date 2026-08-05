import React from 'react';

export interface LanHashtagLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHashtagLock(props: LanHashtagLockProps): React.ReactElement;
export default LanHashtagLock;
