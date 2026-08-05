import React from 'react';

export interface LanAnchorLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAnchorLock(props: LanAnchorLockProps): React.ReactElement;
export default LanAnchorLock;
