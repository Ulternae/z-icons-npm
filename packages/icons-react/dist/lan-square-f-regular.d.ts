import React from 'react';

export interface LanSquareFRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareFRegular: React.FC<LanSquareFRegularProps>;
export default LanSquareFRegular;
