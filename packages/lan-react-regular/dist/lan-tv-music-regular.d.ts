import React from 'react';

export interface LanTvMusicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTvMusicRegular(props: LanTvMusicRegularProps): React.ReactElement;
export default LanTvMusicRegular;
