import React from 'react';

export interface LanRingsWeddingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRingsWedding: React.FC<LanRingsWeddingProps>;
export default LanRingsWedding;
