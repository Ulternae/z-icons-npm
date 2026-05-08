import React from 'react';

export interface MinaLetterOWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterOWavesSolid: React.FC<MinaLetterOWavesSolidProps>;
export default MinaLetterOWavesSolid;
