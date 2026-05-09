import React from 'react';

export interface MinaLetterBWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterBWavesSolid: React.FC<MinaLetterBWavesSolidProps>;
export default MinaLetterBWavesSolid;
