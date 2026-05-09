import React from 'react';

export interface MinaLetterGWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterGWavesSolid: React.FC<MinaLetterGWavesSolidProps>;
export default MinaLetterGWavesSolid;
