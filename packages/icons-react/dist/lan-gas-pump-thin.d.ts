import React from 'react';

export interface LanGasPumpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGasPumpThin: React.FC<LanGasPumpThinProps>;
export default LanGasPumpThin;
