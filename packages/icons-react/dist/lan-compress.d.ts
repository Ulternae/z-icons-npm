import React from 'react';

export interface LanCompressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompress: React.FC<LanCompressProps>;
export default LanCompress;
