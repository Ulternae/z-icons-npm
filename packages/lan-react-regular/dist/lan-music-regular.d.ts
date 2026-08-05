import React from 'react';

export interface LanMusicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMusicRegular(props: LanMusicRegularProps): React.ReactElement;
export default LanMusicRegular;
