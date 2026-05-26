import React from 'react';

export interface LanSquareBinaryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBinaryRegular: React.FC<LanSquareBinaryRegularProps>;
export default LanSquareBinaryRegular;
