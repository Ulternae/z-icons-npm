import React from 'react';

export interface LanVideoCameraThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoCameraThin: React.FC<LanVideoCameraThinProps>;
export default LanVideoCameraThin;
