import React from 'react';

export interface LanGasPumpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGasPump: React.FC<LanGasPumpProps>;
export default LanGasPump;
