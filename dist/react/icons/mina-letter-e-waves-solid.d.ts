import React from 'react';

export interface MinaLetterEWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterEWavesSolid: React.FC<MinaLetterEWavesSolidProps>;
export default MinaLetterEWavesSolid;
