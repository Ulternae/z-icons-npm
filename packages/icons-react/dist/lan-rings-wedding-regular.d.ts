import React from 'react';

export interface LanRingsWeddingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRingsWeddingRegular: React.FC<LanRingsWeddingRegularProps>;
export default LanRingsWeddingRegular;
