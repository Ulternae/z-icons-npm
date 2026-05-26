import React from 'react';

export interface LanVolumeSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeSlashSolid: React.FC<LanVolumeSlashSolidProps>;
export default LanVolumeSlashSolid;
