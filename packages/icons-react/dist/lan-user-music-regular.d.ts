import React from 'react';

export interface LanUserMusicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMusicRegular: React.FC<LanUserMusicRegularProps>;
export default LanUserMusicRegular;
