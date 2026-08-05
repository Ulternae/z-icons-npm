import React from 'react';

export interface MinaSevenWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSevenWavesSolid(props: MinaSevenWavesSolidProps): React.ReactElement;
export default MinaSevenWavesSolid;
