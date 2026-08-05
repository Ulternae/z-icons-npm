import React from 'react';

export interface LanBurstNewRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurstNewRegular(props: LanBurstNewRegularProps): React.ReactElement;
export default LanBurstNewRegular;
