import React from 'react';

export interface LanMusicMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMusicMagnifyingGlass(props: LanMusicMagnifyingGlassProps): React.ReactElement;
export default LanMusicMagnifyingGlass;
