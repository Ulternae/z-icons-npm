import React from 'react';

export interface MinaSearchWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchWavesSolid(props: MinaSearchWavesSolidProps): React.ReactElement;
export default MinaSearchWavesSolid;
