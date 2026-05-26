import React from 'react';

export interface LanSquareRRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRRegular: React.FC<LanSquareRRegularProps>;
export default LanSquareRRegular;
