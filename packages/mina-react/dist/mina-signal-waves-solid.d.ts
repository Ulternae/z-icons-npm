import React from 'react';

export interface MinaSignalWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSignalWavesSolid(props: MinaSignalWavesSolidProps): React.ReactElement;
export default MinaSignalWavesSolid;
