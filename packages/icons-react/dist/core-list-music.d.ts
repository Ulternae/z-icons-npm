import React from 'react';

export interface CoreListMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreListMusic: React.FC<CoreListMusicProps>;
export default CoreListMusic;
