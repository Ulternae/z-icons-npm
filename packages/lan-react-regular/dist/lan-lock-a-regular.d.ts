import React from 'react';

export interface LanLockARegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLockARegular(props: LanLockARegularProps): React.ReactElement;
export default LanLockARegular;
