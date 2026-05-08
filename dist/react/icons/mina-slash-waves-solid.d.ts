import React from 'react';

export interface MinaSlashWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSlashWavesSolid: React.FC<MinaSlashWavesSolidProps>;
export default MinaSlashWavesSolid;
