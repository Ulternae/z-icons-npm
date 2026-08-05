import React from 'react';

export interface LanMusicSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMusicSlash(props: LanMusicSlashProps): React.ReactElement;
export default LanMusicSlash;
