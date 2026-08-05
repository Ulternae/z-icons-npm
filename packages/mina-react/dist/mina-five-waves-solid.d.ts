import React from 'react';

export interface MinaFiveWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFiveWavesSolid(props: MinaFiveWavesSolidProps): React.ReactElement;
export default MinaFiveWavesSolid;
