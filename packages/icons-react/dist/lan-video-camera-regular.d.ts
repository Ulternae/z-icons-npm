import React from 'react';

export interface LanVideoCameraRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoCameraRegular: React.FC<LanVideoCameraRegularProps>;
export default LanVideoCameraRegular;
