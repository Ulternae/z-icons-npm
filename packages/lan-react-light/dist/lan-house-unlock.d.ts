import React from 'react';

export interface LanHouseUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseUnlock(props: LanHouseUnlockProps): React.ReactElement;
export default LanHouseUnlock;
