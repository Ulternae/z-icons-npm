import React from 'react';

export interface LanVolumeSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeSlash(props: LanVolumeSlashProps): React.ReactElement;
export default LanVolumeSlash;
