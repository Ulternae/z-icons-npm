import React from 'react';

export interface MinaForwardWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaForwardWavesSolid(props: MinaForwardWavesSolidProps): React.ReactElement;
export default MinaForwardWavesSolid;
