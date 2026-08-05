import React from 'react';

export interface MinaVolumeSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVolumeSlashSolid(props: MinaVolumeSlashSolidProps): React.ReactElement;
export default MinaVolumeSlashSolid;
