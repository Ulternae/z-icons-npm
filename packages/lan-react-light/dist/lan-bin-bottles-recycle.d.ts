import React from 'react';

export interface LanBinBottlesRecycleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinBottlesRecycle(props: LanBinBottlesRecycleProps): React.ReactElement;
export default LanBinBottlesRecycle;
