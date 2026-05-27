import React from 'react';

export interface NeoVolumeSlashRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVolumeSlashRegularDuo: React.FC<NeoVolumeSlashRegularDuoProps>;
export default NeoVolumeSlashRegularDuo;
