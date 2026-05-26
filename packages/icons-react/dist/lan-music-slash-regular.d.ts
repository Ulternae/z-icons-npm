import React from 'react';

export interface LanMusicSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMusicSlashRegular: React.FC<LanMusicSlashRegularProps>;
export default LanMusicSlashRegular;
