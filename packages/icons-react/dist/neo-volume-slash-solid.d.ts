import React from 'react';

export interface NeoVolumeSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVolumeSlashSolid: React.FC<NeoVolumeSlashSolidProps>;
export default NeoVolumeSlashSolid;
