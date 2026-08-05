import React from 'react';

export interface LanListMusicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListMusicThin(props: LanListMusicThinProps): React.ReactElement;
export default LanListMusicThin;
