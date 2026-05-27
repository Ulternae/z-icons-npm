import React from 'react';

export interface CoreListMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreListMusicSolid: React.FC<CoreListMusicSolidProps>;
export default CoreListMusicSolid;
