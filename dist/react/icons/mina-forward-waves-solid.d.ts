import React from 'react';

export interface MinaForwardWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaForwardWavesSolid: React.FC<MinaForwardWavesSolidProps>;
export default MinaForwardWavesSolid;
