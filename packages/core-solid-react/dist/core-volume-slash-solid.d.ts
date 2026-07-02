import React from 'react';

export interface CoreVolumeSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVolumeSlashSolid(props: CoreVolumeSlashSolidProps): React.ReactElement;
export default CoreVolumeSlashSolid;
