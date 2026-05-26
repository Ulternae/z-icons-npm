import React from 'react';

export interface LanMusicSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMusicSlash: React.FC<LanMusicSlashProps>;
export default LanMusicSlash;
