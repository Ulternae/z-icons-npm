import React from 'react';

export interface LanSquareGRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareGRegular: React.FC<LanSquareGRegularProps>;
export default LanSquareGRegular;
