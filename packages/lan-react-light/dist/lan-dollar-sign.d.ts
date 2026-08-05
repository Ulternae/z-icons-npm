import React from 'react';

export interface LanDollarSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDollarSign(props: LanDollarSignProps): React.ReactElement;
export default LanDollarSign;
