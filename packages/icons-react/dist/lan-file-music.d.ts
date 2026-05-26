import React from 'react';

export interface LanFileMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMusic: React.FC<LanFileMusicProps>;
export default LanFileMusic;
