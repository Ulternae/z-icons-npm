import React from 'react';

export interface LanBurstRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurstRegular(props: LanBurstRegularProps): React.ReactElement;
export default LanBurstRegular;
