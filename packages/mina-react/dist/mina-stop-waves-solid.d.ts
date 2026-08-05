import React from 'react';

export interface MinaStopWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStopWavesSolid(props: MinaStopWavesSolidProps): React.ReactElement;
export default MinaStopWavesSolid;
