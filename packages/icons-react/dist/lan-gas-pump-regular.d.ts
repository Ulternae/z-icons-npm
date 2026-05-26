import React from 'react';

export interface LanGasPumpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGasPumpRegular: React.FC<LanGasPumpRegularProps>;
export default LanGasPumpRegular;
