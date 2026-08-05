import React from 'react';

export interface LanUserUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserUnlock(props: LanUserUnlockProps): React.ReactElement;
export default LanUserUnlock;
