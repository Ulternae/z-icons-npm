import React from 'react';

export interface MinaHeartWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartWavesSolid(props: MinaHeartWavesSolidProps): React.ReactElement;
export default MinaHeartWavesSolid;
