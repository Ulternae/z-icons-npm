import React from 'react';

export interface LanSquareBinaryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBinary: React.FC<LanSquareBinaryProps>;
export default LanSquareBinary;
