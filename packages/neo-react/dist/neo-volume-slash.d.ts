import React from 'react';

export interface NeoVolumeSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoVolumeSlash(props: NeoVolumeSlashProps): React.ReactElement;
export default NeoVolumeSlash;
