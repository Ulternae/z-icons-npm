import React from 'react';

export interface MinaLetterJWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterJWavesSolid: React.FC<MinaLetterJWavesSolidProps>;
export default MinaLetterJWavesSolid;
