import React from 'react';

export interface MinaSlashWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSlashWavesSolid(props: MinaSlashWavesSolidProps): React.ReactElement;
export default MinaSlashWavesSolid;
