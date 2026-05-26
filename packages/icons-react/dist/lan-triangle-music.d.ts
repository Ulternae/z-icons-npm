import React from 'react';

export interface LanTriangleMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTriangleMusic: React.FC<LanTriangleMusicProps>;
export default LanTriangleMusic;
