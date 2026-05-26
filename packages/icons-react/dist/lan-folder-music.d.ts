import React from 'react';

export interface LanFolderMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderMusic: React.FC<LanFolderMusicProps>;
export default LanFolderMusic;
