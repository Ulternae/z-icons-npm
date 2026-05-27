import React from 'react';

export interface CoreMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMusicSolid: React.FC<CoreMusicSolidProps>;
export default CoreMusicSolid;
