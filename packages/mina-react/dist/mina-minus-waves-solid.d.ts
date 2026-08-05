import React from 'react';

export interface MinaMinusWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinusWavesSolid(props: MinaMinusWavesSolidProps): React.ReactElement;
export default MinaMinusWavesSolid;
