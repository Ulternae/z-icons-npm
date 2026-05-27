import React from 'react';

export interface NeoMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMusicSolid: React.FC<NeoMusicSolidProps>;
export default NeoMusicSolid;
