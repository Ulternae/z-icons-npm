import React from 'react';

export interface MinaLetterFWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterFWavesSolid: React.FC<MinaLetterFWavesSolidProps>;
export default MinaLetterFWavesSolid;
