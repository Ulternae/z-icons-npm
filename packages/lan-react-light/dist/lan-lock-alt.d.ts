import React from 'react';

export interface LanLockAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLockAlt(props: LanLockAltProps): React.ReactElement;
export default LanLockAlt;
