import React from 'react';

export interface LanGasPumpRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGasPumpRight: React.FC<LanGasPumpRightProps>;
export default LanGasPumpRight;
