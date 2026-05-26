import React from 'react';

export interface LanNonBinaryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNonBinary: React.FC<LanNonBinaryProps>;
export default LanNonBinary;
