import React from 'react';

export interface LanTrademarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrademark(props: LanTrademarkProps): React.ReactElement;
export default LanTrademark;
