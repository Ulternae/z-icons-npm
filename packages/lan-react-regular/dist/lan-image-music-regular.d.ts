import React from 'react';

export interface LanImageMusicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageMusicRegular(props: LanImageMusicRegularProps): React.ReactElement;
export default LanImageMusicRegular;
