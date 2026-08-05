import React from 'react';

export interface LanTrademarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrademarkThin(props: LanTrademarkThinProps): React.ReactElement;
export default LanTrademarkThin;
