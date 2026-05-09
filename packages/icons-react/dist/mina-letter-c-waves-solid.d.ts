import React from 'react';

export interface MinaLetterCWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterCWavesSolid: React.FC<MinaLetterCWavesSolidProps>;
export default MinaLetterCWavesSolid;
