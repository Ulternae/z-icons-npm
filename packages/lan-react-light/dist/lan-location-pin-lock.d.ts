import React from 'react';

export interface LanLocationPinLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLocationPinLock(props: LanLocationPinLockProps): React.ReactElement;
export default LanLocationPinLock;
