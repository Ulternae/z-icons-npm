import React from 'react';

export interface LanCompressWideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompressWideThin: React.FC<LanCompressWideThinProps>;
export default LanCompressWideThin;
