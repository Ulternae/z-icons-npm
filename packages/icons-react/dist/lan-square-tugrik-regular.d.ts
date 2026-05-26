import React from 'react';

export interface LanSquareTugrikRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareTugrikRegular: React.FC<LanSquareTugrikRegularProps>;
export default LanSquareTugrikRegular;
