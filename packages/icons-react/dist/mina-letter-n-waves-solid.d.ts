import React from 'react';

export interface MinaLetterNWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterNWavesSolid: React.FC<MinaLetterNWavesSolidProps>;
export default MinaLetterNWavesSolid;
