import React from 'react';

export interface LanBellRingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellRingThin(props: LanBellRingThinProps): React.ReactElement;
export default LanBellRingThin;
