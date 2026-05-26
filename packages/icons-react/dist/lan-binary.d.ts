import React from 'react';

export interface LanBinaryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinary: React.FC<LanBinaryProps>;
export default LanBinary;
