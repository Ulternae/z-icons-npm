import React from 'react';

export interface LanCompressWideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompressWideSolid: React.FC<LanCompressWideSolidProps>;
export default LanCompressWideSolid;
