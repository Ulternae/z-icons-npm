import React from 'react';

export interface MinaLetterRWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterRWavesSolid: React.FC<MinaLetterRWavesSolidProps>;
export default MinaLetterRWavesSolid;
