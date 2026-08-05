import React from 'react';

export interface LanLockASolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLockASolid(props: LanLockASolidProps): React.ReactElement;
export default LanLockASolid;
