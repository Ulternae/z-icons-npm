import React from 'react';

export interface LanSquareSRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareSRegular: React.FC<LanSquareSRegularProps>;
export default LanSquareSRegular;
