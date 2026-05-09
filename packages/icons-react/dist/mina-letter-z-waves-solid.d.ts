import React from 'react';

export interface MinaLetterZWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterZWavesSolid: React.FC<MinaLetterZWavesSolidProps>;
export default MinaLetterZWavesSolid;
