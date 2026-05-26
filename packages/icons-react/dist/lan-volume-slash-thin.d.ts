import React from 'react';

export interface LanVolumeSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeSlashThin: React.FC<LanVolumeSlashThinProps>;
export default LanVolumeSlashThin;
