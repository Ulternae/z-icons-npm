import React from 'react';

export interface MinaMusicWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMusicWavesSolid(props: MinaMusicWavesSolidProps): React.ReactElement;
export default MinaMusicWavesSolid;
