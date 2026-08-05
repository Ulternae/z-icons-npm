import React from 'react';

export interface MinaFourWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFourWavesSolid(props: MinaFourWavesSolidProps): React.ReactElement;
export default MinaFourWavesSolid;
