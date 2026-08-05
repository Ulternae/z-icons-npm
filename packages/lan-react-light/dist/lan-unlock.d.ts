import React from 'react';

export interface LanUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUnlock(props: LanUnlockProps): React.ReactElement;
export default LanUnlock;
