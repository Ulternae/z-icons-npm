import React from 'react';

export interface MinaLetterYWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterYWavesSolid: React.FC<MinaLetterYWavesSolidProps>;
export default MinaLetterYWavesSolid;
