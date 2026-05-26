import React from 'react';

export interface LanGasPumpLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGasPumpLeft: React.FC<LanGasPumpLeftProps>;
export default LanGasPumpLeft;
