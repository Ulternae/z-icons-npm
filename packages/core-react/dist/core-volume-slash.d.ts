import React from 'react';

export interface CoreVolumeSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVolumeSlash(props: CoreVolumeSlashProps): React.ReactElement;
export default CoreVolumeSlash;
