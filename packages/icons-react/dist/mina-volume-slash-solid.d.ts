import React from 'react';

export interface MinaVolumeSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVolumeSlashSolid: React.FC<MinaVolumeSlashSolidProps>;
export default MinaVolumeSlashSolid;
