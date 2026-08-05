import React from 'react';

export interface LanBuoyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuoyThin(props: LanBuoyThinProps): React.ReactElement;
export default LanBuoyThin;
