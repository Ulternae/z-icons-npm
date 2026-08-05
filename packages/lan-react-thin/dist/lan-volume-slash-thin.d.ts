import React from 'react';

export interface LanVolumeSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeSlashThin(props: LanVolumeSlashThinProps): React.ReactElement;
export default LanVolumeSlashThin;
