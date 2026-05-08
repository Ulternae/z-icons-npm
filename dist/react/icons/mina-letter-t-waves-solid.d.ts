import React from 'react';

export interface MinaLetterTWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterTWavesSolid: React.FC<MinaLetterTWavesSolidProps>;
export default MinaLetterTWavesSolid;
