import React from 'react';

export interface MinaSlashWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSlashWaves: React.FC<MinaSlashWavesProps>;
export default MinaSlashWaves;
