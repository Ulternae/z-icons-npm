import React from 'react';

export interface LanSquareManatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareManatRegular: React.FC<LanSquareManatRegularProps>;
export default LanSquareManatRegular;
