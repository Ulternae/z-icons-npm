import React from 'react';

export interface LanBurstThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurstThin(props: LanBurstThinProps): React.ReactElement;
export default LanBurstThin;
