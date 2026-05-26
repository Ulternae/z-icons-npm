import React from 'react';

export interface LanSquareQuartersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareQuartersRegular: React.FC<LanSquareQuartersRegularProps>;
export default LanSquareQuartersRegular;
