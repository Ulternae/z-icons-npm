import React from 'react';

export interface LanImageMusicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageMusicRegular: React.FC<LanImageMusicRegularProps>;
export default LanImageMusicRegular;
