import React from 'react';

export interface LanImageMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageMusicSolid(props: LanImageMusicSolidProps): React.ReactElement;
export default LanImageMusicSolid;
