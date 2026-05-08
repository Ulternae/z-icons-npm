import React from 'react';

export interface MinaLetterMWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterMWavesSolid: React.FC<MinaLetterMWavesSolidProps>;
export default MinaLetterMWavesSolid;
