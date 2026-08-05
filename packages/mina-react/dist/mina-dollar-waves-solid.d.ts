import React from 'react';

export interface MinaDollarWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDollarWavesSolid(props: MinaDollarWavesSolidProps): React.ReactElement;
export default MinaDollarWavesSolid;
