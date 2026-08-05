import React from 'react';

export interface LanBinRecycleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinRecycleRegular(props: LanBinRecycleRegularProps): React.ReactElement;
export default LanBinRecycleRegular;
