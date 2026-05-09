import React from 'react';

export interface MinaThreeWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThreeWavesSolid: React.FC<MinaThreeWavesSolidProps>;
export default MinaThreeWavesSolid;
