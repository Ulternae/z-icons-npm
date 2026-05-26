import React from 'react';

export interface LanListMusicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListMusicRegular: React.FC<LanListMusicRegularProps>;
export default LanListMusicRegular;
