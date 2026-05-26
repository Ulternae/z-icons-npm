import React from 'react';

export interface LanSquareFrancRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareFrancRegular: React.FC<LanSquareFrancRegularProps>;
export default LanSquareFrancRegular;
