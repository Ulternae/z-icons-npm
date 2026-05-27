import React from 'react';

export interface NeoVolumeSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVolumeSlash: React.FC<NeoVolumeSlashProps>;
export default NeoVolumeSlash;
