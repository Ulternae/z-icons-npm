import React from 'react';

export interface LanCassetteBetamaxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCassetteBetamaxRegular: React.FC<LanCassetteBetamaxRegularProps>;
export default LanCassetteBetamaxRegular;
