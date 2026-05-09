import React from 'react';

export interface MinaLetterIWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterIWavesSolid: React.FC<MinaLetterIWavesSolidProps>;
export default MinaLetterIWavesSolid;
