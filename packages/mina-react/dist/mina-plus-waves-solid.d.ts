import React from 'react';

export interface MinaPlusWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlusWavesSolid(props: MinaPlusWavesSolidProps): React.ReactElement;
export default MinaPlusWavesSolid;
