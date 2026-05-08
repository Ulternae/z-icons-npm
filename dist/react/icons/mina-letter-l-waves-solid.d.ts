import React from 'react';

export interface MinaLetterLWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterLWavesSolid: React.FC<MinaLetterLWavesSolidProps>;
export default MinaLetterLWavesSolid;
