import React from 'react';

export interface LanTrademarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrademarkSolid(props: LanTrademarkSolidProps): React.ReactElement;
export default LanTrademarkSolid;
