import React from 'react';

export interface CoreVolumeSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVolumeSlash: React.FC<CoreVolumeSlashProps>;
export default CoreVolumeSlash;
