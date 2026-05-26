import React from 'react';

export interface LanTriangleMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTriangleMusicThin: React.FC<LanTriangleMusicThinProps>;
export default LanTriangleMusicThin;
