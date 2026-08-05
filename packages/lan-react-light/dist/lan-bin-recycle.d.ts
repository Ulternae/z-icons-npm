import React from 'react';

export interface LanBinRecycleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinRecycle(props: LanBinRecycleProps): React.ReactElement;
export default LanBinRecycle;
