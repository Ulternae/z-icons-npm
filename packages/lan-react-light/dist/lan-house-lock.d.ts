import React from 'react';

export interface LanHouseLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseLock(props: LanHouseLockProps): React.ReactElement;
export default LanHouseLock;
