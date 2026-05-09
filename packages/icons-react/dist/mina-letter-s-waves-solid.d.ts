import React from 'react';

export interface MinaLetterSWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterSWavesSolid: React.FC<MinaLetterSWavesSolidProps>;
export default MinaLetterSWavesSolid;
