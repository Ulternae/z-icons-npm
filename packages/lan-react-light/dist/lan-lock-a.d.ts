import React from 'react';

export interface LanLockAProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLockA(props: LanLockAProps): React.ReactElement;
export default LanLockA;
