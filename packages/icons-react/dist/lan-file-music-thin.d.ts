import React from 'react';

export interface LanFileMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMusicThin: React.FC<LanFileMusicThinProps>;
export default LanFileMusicThin;
