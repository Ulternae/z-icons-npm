import React from 'react';

export interface LanMusicSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMusicSlashThin: React.FC<LanMusicSlashThinProps>;
export default LanMusicSlashThin;
