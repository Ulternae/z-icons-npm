import React from 'react';

export interface LanGasPumpRightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGasPumpRightThin: React.FC<LanGasPumpRightThinProps>;
export default LanGasPumpRightThin;
