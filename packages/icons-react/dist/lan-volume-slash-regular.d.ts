import React from 'react';

export interface LanVolumeSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeSlashRegular: React.FC<LanVolumeSlashRegularProps>;
export default LanVolumeSlashRegular;
