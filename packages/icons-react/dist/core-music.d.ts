import React from 'react';

export interface CoreMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMusic: React.FC<CoreMusicProps>;
export default CoreMusic;
