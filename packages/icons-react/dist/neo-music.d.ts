import React from 'react';

export interface NeoMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMusic: React.FC<NeoMusicProps>;
export default NeoMusic;
