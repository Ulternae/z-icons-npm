import React from 'react';

export interface MinaLetterHWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterHWavesSolid: React.FC<MinaLetterHWavesSolidProps>;
export default MinaLetterHWavesSolid;
