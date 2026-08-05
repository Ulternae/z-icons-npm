import React from 'react';

export interface LanNfcLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcLockRegular(props: LanNfcLockRegularProps): React.ReactElement;
export default LanNfcLockRegular;
