import React from 'react';

export interface LanTrademarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrademarkRegular(props: LanTrademarkRegularProps): React.ReactElement;
export default LanTrademarkRegular;
