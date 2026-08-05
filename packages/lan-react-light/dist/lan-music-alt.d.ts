import React from 'react';

export interface LanMusicAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMusicAlt(props: LanMusicAltProps): React.ReactElement;
export default LanMusicAlt;
