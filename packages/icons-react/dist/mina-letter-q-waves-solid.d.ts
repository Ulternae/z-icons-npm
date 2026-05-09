import React from 'react';

export interface MinaLetterQWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterQWavesSolid: React.FC<MinaLetterQWavesSolidProps>;
export default MinaLetterQWavesSolid;
