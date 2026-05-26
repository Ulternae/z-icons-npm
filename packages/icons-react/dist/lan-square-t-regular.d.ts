import React from 'react';

export interface LanSquareTRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareTRegular: React.FC<LanSquareTRegularProps>;
export default LanSquareTRegular;
