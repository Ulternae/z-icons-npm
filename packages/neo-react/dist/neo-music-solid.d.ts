import React from 'react';

export interface NeoMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMusicSolid(props: NeoMusicSolidProps): React.ReactElement;
export default NeoMusicSolid;
