import React from 'react';

export interface LanSleighThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSleighThin(props: LanSleighThinProps): React.ReactElement;
export default LanSleighThin;
