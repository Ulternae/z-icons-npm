import React from 'react';

export interface LanImageMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageMusicThin(props: LanImageMusicThinProps): React.ReactElement;
export default LanImageMusicThin;
