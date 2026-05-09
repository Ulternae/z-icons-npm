import React from 'react';

export interface MinaLetterWWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterWWavesSolid: React.FC<MinaLetterWWavesSolidProps>;
export default MinaLetterWWavesSolid;
