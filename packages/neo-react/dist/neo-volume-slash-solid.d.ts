import React from 'react';

export interface NeoVolumeSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoVolumeSlashSolid(props: NeoVolumeSlashSolidProps): React.ReactElement;
export default NeoVolumeSlashSolid;
