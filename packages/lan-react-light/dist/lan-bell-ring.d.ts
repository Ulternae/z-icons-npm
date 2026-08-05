import React from 'react';

export interface LanBellRingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellRing(props: LanBellRingProps): React.ReactElement;
export default LanBellRing;
