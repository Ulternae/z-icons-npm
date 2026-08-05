import React from 'react';

export interface MinaSlashWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSlashWaves(props: MinaSlashWavesProps): React.ReactElement;
export default MinaSlashWaves;
