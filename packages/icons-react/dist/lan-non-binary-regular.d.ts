import React from 'react';

export interface LanNonBinaryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNonBinaryRegular: React.FC<LanNonBinaryRegularProps>;
export default LanNonBinaryRegular;
