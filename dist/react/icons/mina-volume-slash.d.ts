import React from 'react';

export interface MinaVolumeSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVolumeSlash: React.FC<MinaVolumeSlashProps>;
export default MinaVolumeSlash;
