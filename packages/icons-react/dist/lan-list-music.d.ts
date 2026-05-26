import React from 'react';

export interface LanListMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListMusic: React.FC<LanListMusicProps>;
export default LanListMusic;
