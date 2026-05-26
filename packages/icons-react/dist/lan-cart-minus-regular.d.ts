import React from 'react';

export interface LanCartMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartMinusRegular: React.FC<LanCartMinusRegularProps>;
export default LanCartMinusRegular;
