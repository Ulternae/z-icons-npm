import React from 'react';

export interface LanUnlockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUnlockThin(props: LanUnlockThinProps): React.ReactElement;
export default LanUnlockThin;
