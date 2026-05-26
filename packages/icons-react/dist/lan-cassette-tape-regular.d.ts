import React from 'react';

export interface LanCassetteTapeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCassetteTapeRegular: React.FC<LanCassetteTapeRegularProps>;
export default LanCassetteTapeRegular;
