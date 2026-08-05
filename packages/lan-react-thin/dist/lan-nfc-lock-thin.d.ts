import React from 'react';

export interface LanNfcLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcLockThin(props: LanNfcLockThinProps): React.ReactElement;
export default LanNfcLockThin;
