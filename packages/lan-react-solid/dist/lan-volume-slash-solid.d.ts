import React from 'react';

export interface LanVolumeSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeSlashSolid(props: LanVolumeSlashSolidProps): React.ReactElement;
export default LanVolumeSlashSolid;
