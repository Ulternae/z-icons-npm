import React from 'react';

export interface MinaCodeWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCodeWavesSolid: React.FC<MinaCodeWavesSolidProps>;
export default MinaCodeWavesSolid;
