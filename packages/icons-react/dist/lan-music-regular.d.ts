import React from 'react';

export interface LanMusicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMusicRegular: React.FC<LanMusicRegularProps>;
export default LanMusicRegular;
