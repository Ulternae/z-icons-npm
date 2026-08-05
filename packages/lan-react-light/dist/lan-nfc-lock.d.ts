import React from 'react';

export interface LanNfcLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcLock(props: LanNfcLockProps): React.ReactElement;
export default LanNfcLock;
