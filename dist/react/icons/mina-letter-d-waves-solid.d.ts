import React from 'react';

export interface MinaLetterDWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterDWavesSolid: React.FC<MinaLetterDWavesSolidProps>;
export default MinaLetterDWavesSolid;
