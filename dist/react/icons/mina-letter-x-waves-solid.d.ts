import React from 'react';

export interface MinaLetterXWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterXWavesSolid: React.FC<MinaLetterXWavesSolidProps>;
export default MinaLetterXWavesSolid;
