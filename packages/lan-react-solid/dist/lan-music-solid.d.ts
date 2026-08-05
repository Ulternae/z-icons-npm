import React from 'react';

export interface LanMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMusicSolid(props: LanMusicSolidProps): React.ReactElement;
export default LanMusicSolid;
