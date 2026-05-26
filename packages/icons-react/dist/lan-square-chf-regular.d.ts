import React from 'react';

export interface LanSquareChfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareChfRegular: React.FC<LanSquareChfRegularProps>;
export default LanSquareChfRegular;
