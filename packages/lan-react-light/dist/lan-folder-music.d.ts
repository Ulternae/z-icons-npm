import React from 'react';

export interface LanFolderMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderMusic(props: LanFolderMusicProps): React.ReactElement;
export default LanFolderMusic;
