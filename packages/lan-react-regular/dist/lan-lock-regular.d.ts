import React from 'react';

export interface LanLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLockRegular(props: LanLockRegularProps): React.ReactElement;
export default LanLockRegular;
