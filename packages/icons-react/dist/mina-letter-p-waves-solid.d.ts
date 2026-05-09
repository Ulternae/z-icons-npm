import React from 'react';

export interface MinaLetterPWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterPWavesSolid: React.FC<MinaLetterPWavesSolidProps>;
export default MinaLetterPWavesSolid;
