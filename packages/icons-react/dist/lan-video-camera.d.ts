import React from 'react';

export interface LanVideoCameraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoCamera: React.FC<LanVideoCameraProps>;
export default LanVideoCamera;
