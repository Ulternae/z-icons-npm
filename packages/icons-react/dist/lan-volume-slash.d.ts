import React from 'react';

export interface LanVolumeSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeSlash: React.FC<LanVolumeSlashProps>;
export default LanVolumeSlash;
