import React from 'react';

export interface LanMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMusicThin(props: LanMusicThinProps): React.ReactElement;
export default LanMusicThin;
