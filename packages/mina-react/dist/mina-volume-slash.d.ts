import React from 'react';

export interface MinaVolumeSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVolumeSlash(props: MinaVolumeSlashProps): React.ReactElement;
export default MinaVolumeSlash;
