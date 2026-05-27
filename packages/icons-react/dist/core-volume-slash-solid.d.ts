import React from 'react';

export interface CoreVolumeSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVolumeSlashSolid: React.FC<CoreVolumeSlashSolidProps>;
export default CoreVolumeSlashSolid;
