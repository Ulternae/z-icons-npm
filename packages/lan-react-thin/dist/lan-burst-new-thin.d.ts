import React from 'react';

export interface LanBurstNewThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurstNewThin(props: LanBurstNewThinProps): React.ReactElement;
export default LanBurstNewThin;
