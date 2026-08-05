import React from 'react';

export interface MinaHashWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHashWavesSolid(props: MinaHashWavesSolidProps): React.ReactElement;
export default MinaHashWavesSolid;
